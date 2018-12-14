import React from 'react';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import '../App.css';

class Register extends React.Component {
    state = {
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
        checked: false,
        errors: []
    };

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.isFormValid()){
            console.log('True')
        }
    };

    isFormValid = () => {
        let errors = [];
        let error;

        if(this.isFormEmpty(this.state)){
            error = { message: 'All fields must be filled' };
            this.setState({
                errors: errors.concat(error)
            });
            return false
        }
        return true
    };

    isFormEmpty = ({ userName, password, confirmPassword, email, checked }) => {
          return !userName.length || !email.length || !confirmPassword.length || !password.length || !checked
    };

    handleCheckbox = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render(){
        return(
            <div className="main-wrapper">
                <Row>
                    <Col xs="3">
                        <Form>
                            <FormGroup>
                                <Input type="password" name="userName" placeholder="Name" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="confirmPassword" placeholder="Repeat password" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    <Input name="checked" type="checkbox" onChange={this.handleCheckbox} />
                                    Accept Terms & Conditions
                                </label>
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </Col>
                    <Col xs="9">

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Register;