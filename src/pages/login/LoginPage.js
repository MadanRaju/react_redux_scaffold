import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Notification from 'antd/lib/notification';
import Input from 'antd/lib/input';

import routePaths from 'shared/routePaths';

import './login.scss';

class LoginPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
        loginData: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        resetPassword: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    loginUser = () => {
        const { username, password } = this.state;
        const { login } = this.props;
        const params = {
            username,
            password,
        };
        login(params, this.onLoginSuccess, this.onLoginError);
    }

    onLoginSuccess = () => {
        const { history } = this.props;
        history.push({ pathname: routePaths.USERS });
    }

    onLoginError = () => {
        this.notify('error', 'Incorrect username/password');
    }

    resetPassword = () => {
        const { resetPassword } = this.props;
        const { username } = this.state;
        if (username) {
            resetPassword(username, this.onResetPasswordSuccess, this.onResetPasswordError);
        } else {
            this.notify('error', 'Please enter a valid username');
        }
    }

    onResetPasswordSuccess = (response) => {
        if (response.data.status === 'DONE') {
            this.notify('success', 'An email containing password reset link has been sent to you.');
        } else {
            this.onResetPasswordError();
        }
    }

    onResetPasswordError = () => {
        this.notify('error', 'Username/Password does not exist');
    }

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    renderButtonText = () => {
        const { loginData } = this.props;
        return loginData.isPending ? 'SIGNING IN' : 'SIGN IN';
    };

    notify = (type, message) => {
        Notification[type]({
            message,
        });
    }

    render() {
        return (
            <div className="loginPage">
                <div className="loginContainer">
                    <h2 className="loginTitle">
                        Login
                    </h2>
                    <Input
                        className="formElement"
                        placeholder="Username/Email"
                        onChange={this.handleChangeUsername}
                        onPressEnter={this.loginUser}
                    />
                    <Input
                        className="formElement"
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChangePassword}
                        onPressEnter={this.loginUser}
                    />
                    <a className="formElement forgotPassword" onClick={this.resetPassword}>Forgot Password?</a>
                    <Button
                        className="formElement"
                        type="primary"
                        block
                        onClick={this.loginUser}
                    >
                        {this.renderButtonText()}
                    </Button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
