import { connect } from 'react-redux';

import LoginPage from './LoginPage';
import { login, resetPassword } from './loginActions';

const mapStateToProps = state => ({
    loginData: state.loginReducer.login,
});

const mapDispatchToProps = dispatch => ({
    login: (
        params,
        successCallback,
        errorCallback,
    ) => dispatch(login(params, successCallback, errorCallback)),
    resetPassword: (
        username,
        successCallback,
        errorCallback,
    ) => dispatch(resetPassword(username, successCallback, errorCallback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
