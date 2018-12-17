import React from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'
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

    componentWillReceiveProps(nextProps) {
        let errors = [];
        let error = nextProps.error;

        if(nextProps.error){
            this.setState({errors: errors.concat(error)})
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.isFormValid()){
            console.log('True')
        }
        const user = {
            name: this.state.userName,
            email: this.state.email,
            password: this.state.password
        };

        this.props.registerUser(user, this.props.history);
    };

    displayErrors = errors => errors.map((err, i) => <p key={i}>{err.message} {err.email}</p>);

    isFormValid = () => {
        let errors = [];
        let error;

        if(this.isFormEmpty(this.state)){
            error = { message: 'All fields must be filled' };
            this.setState({
                errors: errors.concat(error)
            });
            return false
        } else if(!this.isPasswordValid(this.state)) {
            error = { message: 'Password is invalid' };
            this.setState({
                errors: errors.concat(error)
            });
            return false
        } else {
            return true
        }
    };

    isPasswordValid = ({ password, confirmPassword }) => {
        if(password.length < 6 || confirmPassword < 6){
            return false
        } else if(password !== confirmPassword){
            return false
        } else{
            return true
        }
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
        const { errors } = this.state;

        return(
            <div className="main-wrapper">
                <Row>
                    <Col xs="12">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type="text" name="userName" placeholder="Name" onChange={this.handleChange}/>
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
                                </label>registerUser
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                        <Link to="/login">LOGIN NOW</Link>
                        {errors.length > 0 && (
                            <Alert color="danger" className="text-center">
                                <h3>Something wrong</h3>
                                {this.displayErrors(errors)}
                            </Alert>
                        )}
                    </Col>
                    <Col xs="12">

                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));