import { connect } from 'react-redux';

import UserManagement from 'pages/userManagement/UserManagement';
import {
    getUsers, createUser, updateUser, getRoles,
} from './userManagementActions';

const mapStateToProps = state => ({
    users: state.userManagementReducer.users,
    roles: state.userManagementReducer.roles,
    authenticatedData: state.loginReducer.login.data,
});

const mapDispatchToProps = dispatch => ({
    getUsers: params => dispatch(getUsers(params)),
    createUser: (accessToken, payload) => dispatch(createUser(accessToken, payload)),
    updateUser: (
        accessToken,
        changedPayload,
        successCallback,
    ) => dispatch(updateUser(accessToken, changedPayload, successCallback)),
    getRoles: accessToken => dispatch(getRoles(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
