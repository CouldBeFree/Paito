import React from 'react';
import preloader from '../../preloader.gif';
import { connect } from 'react-redux';
import { getCoins } from '../../actions/getCoins';

class Modal extends React.Component{
    state = {
        items: [],
        innerLoading: false
    };

    componentDidMount(){
        this.props.getCoins();
    }

    componentWillReceiveProps(nextProps) {
        const list = nextProps.coinsList.coins;
        const listArr = Object.keys(list);
        this.setState({
            items: listArr
        })
    }

    filterCoins = (e) => {
        const {coinsList} = this.props;
        const list = coinsList.coins;
        let listArr = Object.keys(list);
        listArr = listArr.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            items: listArr
        })
    };

    render(){
        const {isLoading} = this.props;
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
                                    this.state.items.map((item, index) => {
                                        return <li key={index}>{item}</li>
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