import React from 'react';
import '../App.scss';
import { Bar, Pie } from 'react-chartjs-2'

class Ico extends React.Component {
    state = {
        chartData:{
            labels: ['Aug 2017', 'Sept 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017', 'Jan 2018', 'Feb 2018', 'Mar 2018', 'April 2018', 'May 2018'],
            datasets:[
                {
                    label:'ICO Token',
                    data:[
                        135,
                        30,
                        110,
                        160,
                        130,
                        220,
                        100,
                        170,
                        115,
                        50
                    ],
                    backgroundColor:[
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)',
                        'rgba(142, 200, 188, 1)'
                    ]
                }
            ]},
        pieData: {
            labels: ['XPR', 'ARD', 'BTC', 'ESP'],
            datasets:[
                {
                    label:'ICO Token',
                    data:[
                        135,
                        90,
                        110,
                        55
                    ],
                    backgroundColor:[
                        'rgba(247, 147, 27, 1)',
                        'rgba(254, 11, 11, 1)',
                        'rgba(18, 118, 168, 1)',
                        'rgba(58, 67, 82, 1)'
                    ]
                }
            ]},
        transactions: [
            {
                status: 'Paid',
                date: '13-02-2018',
                amount: 'Deposit',
                value: '5,341',
                currency: 'ETH',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'In Process',
                date: '13-02-2018',
                amount: 'Referral',
                value: '5,341',
                currency: 'BTC',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Paid',
                date: '13-02-2018',
                amount: 'Deposit',
                value: '5,341',
                currency: 'XPR',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Pending',
                date: '13-02-2018',
                amount: 'Withdraw',
                value: '5,341',
                currency: 'NEO',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'In Process',
                date: '13-02-2018',
                amount: 'Referral',
                value: '5,341',
                currency: 'XMR',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Paid',
                date: '13-02-2018',
                amount: 'Deposit',
                value: '5,341',
                currency: 'BTC',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Pending',
                date: '13-02-2018',
                amount: 'Referral',
                value: '5,341',
                currency: 'LTC',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'In Process',
                date: '13-02-2018',
                amount: 'Deposit',
                value: '5,341',
                currency: 'XPR',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Paid',
                date: '13-02-2018',
                amount: 'Withdraw',
                value: '5,341',
                currency: 'LTC',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Paid',
                date: '13-02-2018',
                amount: 'Withdraw',
                value: '5,341',
                currency: 'XPR',
                token: '3,201',
                details: 'Deposit to your balance'
            },
            {
                status: 'Pending',
                date: '13-02-2018',
                amount: 'Deposit',
                value: '5,341',
                currency: 'NEO',
                token: '3,201',
                details: 'Deposit to your balance'
            }
        ]
    };

    render(){
        return(
            <div>
                <h1>Ico Dashboard</h1>
                <div className="row">
                    <div className="col-sm-7">
                        <div className="chart-wrap">
                            <Bar data={this.state.chartData} />
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="chart-wrap d-flex align-items-center">
                            <Pie data={this.state.pieData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ico;