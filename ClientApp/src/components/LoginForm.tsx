import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from "react-router-dom";

import * as LoginStore from '../store/LoginFormStore';
import {TextField, Button} from '@material-ui/core';

type LoginFormProps = LoginStore.LoginState & typeof LoginStore.actionCreators & RouteComponentProps < {} >;

type LoginState = {
    email: string,
    password: string,
    emailError: boolean,
    passwordError: boolean

}

const loginButton = {
    marginLeft: '125px',
    marginTop: '30px'
};

const formInput = {
    width: '220px'
};

class LoginForm extends Component < {},
LoginState > {
    constructor(props : any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
    }

    onEmailChanged = (e : any) => {
        this.setState({email: e.target.value});
    }

    onPasswordChanged = (e : any) => {
        this.setState({password: e.target.value});
    }

    onSubmit = (e : any) => {
        e.preventDefault();
        
        const { email, password } = this.state;

        this.setState({
            emailError: email === ''
        });
        this.setState({
            passwordError: password === ''
        });

        const { emailError, passwordError } = this.state;

        if (!emailError && !passwordError) {
            this.props.login(email, password);
        }
    }

    public render() {
        return (
            <form noValidate autoComplete="off">
                <TextField onChange={
                        this.onEmailChanged
                    }
                    label="Email"
                    style={formInput}
                    error
                    ={this.state.emailError }
                    value={
                        this.state.email
                    }/>
                <br></br>
                <TextField label="Password" type="password"
                    style={formInput}
                    error
                    ={this.state.passwordError}
                    onChange={
                        this.onPasswordChanged
                    }
                    value={
                        this.state.password
                    }/>
                <br></br>
                <Button variant="contained" color="default" size="large"
                    style={loginButton}
                    onClick={
                        this.onSubmit
                }>
                    Login
                </Button>
            </form>
        );
    };
};

export default connect()(LoginForm);

