import { combineReducers } from 'redux';

import loginReducer from 'pages/login/loginReducer';
import userManagementReducer from 'pages/userManagement/userManagementReducer';

export default combineReducers({
    loginReducer,
    userManagementReducer,
});
