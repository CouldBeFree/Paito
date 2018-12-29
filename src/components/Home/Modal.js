import React from 'react';
import axios from 'axios';
import preloader from '../../preloader.gif';
import { connect } from 'react-redux';
import { getCoins } from '../../actions/getCoins';

class Modal extends React.Component{
    state = {
        data: null
    };

    componentDidMount(){
        setTimeout(() => {
            this.props.getCoins();
        }, 2000)
    }

    filterCoins = (e) => {
        let updatedList = [...this.state.data];
        console.log(updatedList);
        updatedList.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
    };

    isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    render(){
        console.log(this.props);
        return(
            <div className="modal-block">
                {
                    this.props.coins.loading ? <img className="preloader" src={preloader} alt="preloader"/> :
                        <div>
                            <div className="d-flex justify-content-between">
                                <input onChange={this.filterCoins} type="text"/>
                                <button className="close-modal"><i className="fas fa-times"></i></button>
                            </div>
                            <ul className="coin-list">
                                {/*{
                                    data.map((item) => {
                                        return <li key={item}>{item}</li>
                                    })
                                }*/}
                                <li>Status ok</li>
                            </ul>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        loading: state.loading,
        coins: state.coins
    }
};

export default connect(mapStateToProps, {getCoins})(Modal);