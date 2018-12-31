import React from 'react';
import isEmptyObj from '../../utils/isEmptyObj'
import {connect} from 'react-redux';

class Card extends React.Component{
    state = {
        selected: []
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            selected: nextProps
        })
    }

    render(){
        return(
            <div>
                {console.log(this.props.selectedCoins)}
                <h1>Card</h1>
                <ul className="card-holder">
                    {
                        isEmptyObj(this.state.selected) ? 'true' : 'false'
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        selectedCoins: state.selectedCoins
    }
};

export default connect(mapStateToProps)(Card);