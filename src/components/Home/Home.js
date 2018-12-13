import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Navigation from '../Route/Route';
import '../App.css';

class Home extends React.Component {
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={3}>
                        <Navigation/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home;