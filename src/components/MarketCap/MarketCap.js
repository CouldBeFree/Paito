import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../App.scss';
import axios from "axios/index";

class MarketCap extends React.Component {
    state = {
        currentPage: 0,
        data: [],
        loading: false
    };

    dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
        (a, i) => "Record " + (i + 1)
    );

    pageSize = 50;
    pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

    componentDidMount(){
        const {data} = this.state;
        this.setState({
            loading: true
        });
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&page=1&tsym=USD')
            .then(res => {
                this.setState({
                    data: res.data.Data,
                    loading: false
                });
            })
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
        axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&page=${index + 1}&tsym=USD`)
            .then(res => {
                this.setState({
                    data: res.data.Data
                })
            })
    }

    render(){
        const { currentPage, data, loading } = this.state;

        return(
            <div>
                <h1>Marketcap</h1>
                {
                    loading ? 'Loading' :
                        <ul>
                            {
                                data.map(item => {
                                    return <li>
                                        {item.CoinInfo.Id}
                                    </li>
                                })
                            }
                        </ul>
                }
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