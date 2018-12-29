import React from 'react';
import preloader from '../../preloader.gif';
import { connect } from 'react-redux';
import { getCoins } from '../../actions/getCoins';

class Modal extends React.Component{
    state = {
        data: null,
        items: []
    };

    componentDidMount(){
        this.props.getCoins();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    filterCoins = (e) => {
        let updatedList = [...this.state.data];
        updatedList.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
    };

    render(){
        const {isLoading, coinsList} = this.props;
        const list = coinsList.coins;
        const listArr = Object.keys(list);
        return(
            <div className="modal-block">
                {
                    isLoading.loading ? <img className="preloader" src={preloader} alt="preloader"/> :
                        <div>
                            <div className="d-flex justify-content-between">
                                <input onChange={this.filterCoins} type="text"/>
                                <button className="close-modal"><i className="fas fa-times"></i></button>
                            </div>
                            <ul className="coin-list">
                                {
                                    listArr.map((item) => {
                                        return <li key={item}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        coinsList: state.coinsList
    }
};

export default connect(mapStateToProps, {getCoins})(Modal);