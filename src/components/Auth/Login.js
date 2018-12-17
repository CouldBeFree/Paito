import React from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import '../App.css';

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

        this.props.loginUser(user);
    };

    displayErrors = errors => errors.map((err, i) => <p key={i}>{err.message} {err.email}</p>);

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
                                {this.displayErrors(errors)}
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

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);