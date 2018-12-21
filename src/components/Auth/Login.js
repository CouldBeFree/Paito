import React from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import '../App.scss';

class Login extends React.Component {
    state = {
        password: '',
        email: '',
        errors: []
    };

    componentWillReceiveProps(nextProps) {
        let errors = [];
        let error = nextProps.error;

        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }

        if(nextProps.error){
            this.setState({errors: errors.concat(error)})
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit = (e) => {
        const { email, password } = this.state;
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        if(this.isFormValid()){
            this.props.loginUser(user);
            return true
        } else{
            return false
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
        } else {
            return true
        }
    };

    displayErrors = errors => errors.map((err, i) => <p key={i}>{err.message} {err.email} {err.password}</p>);

    isFormEmpty = ({ password, email}) => {
        return !email.length || !password.length
    };

    render(){
        const { errors } = this.state;

        return(
            <div className="main-wrapper form-wrap">
                <h4>Login Now</h4>
                <Row>
                    <Col xs="5">
                        <div className="form-holder">
                            <h6 className='form-headline'>Login Now</h6>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                </FormGroup>
                                <Button className="button-form">LOGIN NOW</Button>
                            </Form>
                            <Link to="/register" className="link">Register</Link>
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

export default connect(mapStateToProps, { loginUser })(Login);