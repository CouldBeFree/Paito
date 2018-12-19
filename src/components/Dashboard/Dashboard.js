import React from 'react';
import '../App.scss';
import { Button } from 'reactstrap';

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Button color="danger">Test</Button>
            </div>
        )
    }
}

export default Dashboard;