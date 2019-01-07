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
                <ul className="header d-flex justify-content-between">
                    <li>Name</li>
                    <li>Marketcap</li>
                    <li>Price</li>
                    <li>Volume</li>
                    <li>Change %</li>
                    <li>Volume hour to</li>
                </ul>
                {
                    loading ? 'Loading' :
                        <ol className="list">
                            {
                                data.map(item => {
                                    return <li key={item.CoinInfo.Id}>
                                        <div className="inner-wrapper d-flex justify-content-between">
                                            <div className="coin-image">
                                                <img src={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`} alt="image"/>
                                            </div>
                                            <span>{item.CoinInfo.FullName}</span>
                                            <span>{item.DISPLAY.USD.MKTCAP}</span>
                                            <span>{item.RAW.USD.PRICE.toFixed(2)}$</span>
                                            <span>{item.DISPLAY.USD.VOLUMEDAYTO}</span>
                                            <span>{item.DISPLAY.USD.CHANGEPCT24HOUR}%</span>
                                            <span>{item.DISPLAY.USD.VOLUMEHOURTO}</span>
                                        </div>
                                    </li>
                                })
                            }
                        </ol>
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