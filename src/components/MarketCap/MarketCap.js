import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../App.scss';
import axios from "axios/index";

class MarketCap extends React.Component {
    state = {
        currentPage: 0
    };

    dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
        (a, i) => "Record " + (i + 1)
    );

    pageSize = 50;
    pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
        console.log(index);
        axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&page=${index + 1}&tsym=USD`)
            .then(res => {
                console.log(res.data.Data)
            })
    }

    render(){
        const { currentPage } = this.state;

        return(
            <div>
                <div className="pagination-wrapper">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage - 1)}
                                previous
                                href="#"
                            />
                        </PaginationItem>
                        {[...Array(this.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                            <PaginationLink
                                onClick={e => this.handleClick(e, currentPage + 1)}
                                next
                                href="#"
                            />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}

export default MarketCap;