import { asyncActionTypeCreator, asyncActionCreator } from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';

const getUsersActionType = asyncActionTypeCreator('GET_USERS');
const getUsersAction = asyncActionCreator(getUsersActionType);


const createUserActionType = asyncActionTypeCreator('POST_USER');
const createUserAction = asyncActionCreator(createUserActionType);

const updateUserActionType = asyncActionTypeCreator('PUT_USER');
const updateUserAction = asyncActionCreator(updateUserActionType);

const deleteUserActionType = asyncActionTypeCreator('DELETE_USER');
const deleteUserAction = asyncActionCreator(deleteUserActionType);

const getRolesActionType = asyncActionTypeCreator('GET_ROLES');
const getRolesAction = asyncActionCreator(getRolesActionType);


const getUsers = (accessToken) => {
    const axiosConfig = {
        url: apiPaths.USERS,
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
    };
    return getUsersAction.action(axiosConfig);
};

const createUser = (accessToken, data) => {
    const axiosConfig = {
        url: apiPaths.USERS,
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        data,
    };
    return createUserAction.action(axiosConfig);
};

const updateUser = (accessToken, data, successCallBack) => {
    const axiosConfig = {
        url: `${apiPaths.USERS}/${data.id}`,
        method: 'PUT',
        headers: { Authorization: `Bearer ${accessToken}` },
        data,
    };
    return updateUserAction.action(axiosConfig, successCallBack);
};

const deleteUser = (accessToken, data, successCallBack) => {
    const axiosConfig = {
        url: `${apiPaths.USERS}/${data.id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
        data,
    };
    return deleteUserAction.action(axiosConfig, successCallBack);
};

const getRoles = (accessToken) => {
    const axiosConfig = {
        url: apiPaths.ROLES,
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
    };
    return getRolesAction.action(axiosConfig);
};

export {
    getUsersActionType,
    getUsers,
    createUserActionType,
    createUser,
    updateUserActionType,
    updateUser,
    deleteUserActionType,
    deleteUser,
    getRolesActionType,
    getRoles,

};
