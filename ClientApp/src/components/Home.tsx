import * as React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import './Home.css';

const Home = () => (
    <div className="d-flex justify-content-center align-items-center Login">
        <div className="grid">
            <div className="row">
                <h1>Smart Login</h1>
            </div>
            <div className="row">
                <LoginForm></LoginForm>
            </div>
        </div>
    </div>
);

export default connect()(Home);

