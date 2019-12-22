import { asyncActionTypeCreator, asyncActionCreator } from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';

const loginActionType = asyncActionTypeCreator('LOGIN');
const loginAction = asyncActionCreator(loginActionType);

const login = (data, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.AUTHENTICATION,
        method: 'post',
        data,
    };
    return loginAction.action(axiosConfig, successCallback, errorCallback);
};

const resetPasswordAsyncActionType = asyncActionTypeCreator('RESET_PASSWORD');
const resetPasswordAsyncAction = asyncActionCreator(resetPasswordAsyncActionType);

const resetPassword = (username, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.RESET_PASSWORD(username),
        method: 'post',
    };
    return resetPasswordAsyncAction.action(axiosConfig, successCallback, errorCallback);
};

export {
    loginActionType,
    login,
    resetPasswordAsyncActionType,
    resetPassword,
};
