import React from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'
import '../App.scss';

class Register extends React.Component {
    state = {
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
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
            console.log('True');
            return true
        } else{
            return false
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

    render(){
        const { errors } = this.state;

        return(
            <div className="main-wrapper form-wrap">
                <h4>Register Now</h4>
                <Row>
                    <Col xs="5">
                        <div className="form-holder">
                            <h6 className='form-headline'>Register Now</h6>
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
                                <Button className="button-form">Submit</Button>
                            </Form>
                            <Link to="/login" className="link">Login now</Link>
                            {errors.length > 0 && (
                                <Alert color="danger" className="text-center">
                                    <h3>Something wrong</h3>
                                    {this.displayErrors(errors)}
                                </Alert>
                            )}
                        </div>
                    </Col>
                    <Col xs="7">
                        <h1>Buy and sell coins at the cryptopic without additional fees</h1>
                        <p>Proin non tortor phaetra nisi ulticres rhonus. Quisique posuere ut mi et viverra. Nunc lorem
                            odio, aliquam vei ipsum vei, posuere augue. Sed convillis dul ut erat consequat. In sodales saplen ornare</p>
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