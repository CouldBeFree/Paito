import React from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends React.Component {
    state = {
        password: '',
        email: '',
        errors: []
    };

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render(){
        const { errors } = this.state;

        return(
            <div className="main-wrapper">
                <Row>
                    <Col xs="3">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                        <Link to="/register">REGISTER</Link>
                        {errors.length > 0 && (
                            <Alert color="danger" className="text-center">
                                <h3>Something wrong</h3>
                                {this.dispplayErrors(errors)}
                            </Alert>
                        )}
                    </Col>
                    <Col xs="9">

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Login;