import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../App.scss';
import axios from "axios/index";

class MarketCap extends React.Component {
    state = {
        currentPage: 1
    };

    setPage = (page) => {
        /*axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&page=1&tsym=USD')
            .then(res => {
                console.log(res.data)
            })*/
        console.log(page);
        this.setState({
            currentPage: page
        })
    };

    prevHandler = () => {
        this.setState(prevState => {
            return {currentPage: prevState.currentPage - 1}
        })
    };

    nextHandler = () => {
        this.setState(prevState => {
            return {currentPage: prevState.currentPage + 1}
        })
    };

    render(){
        return(
            <div>
                <h1>Marketcap</h1>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous onClick={this.prevHandler} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={()=> this.setPage(1)}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={()=> this.setPage(2)}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={()=> this.setPage(3)}>
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={()=> this.setPage(4)}>
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={()=> this.setPage(5)}>
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next onClick={this.nextHandler} />
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}

export default MarketCap;