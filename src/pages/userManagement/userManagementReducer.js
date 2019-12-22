import promiseState from 'shared/utils/reduxReducerHelper';
import {
    getUsersActionType, createUserActionType, updateUserActionType, getRolesActionType,
} from './userManagementActions';

const initialState = {
    users: {
        ...promiseState(false, false, false, null),
    },
};


const userManagementReducer = (state = initialState, action) => {
    switch (action.type) {
    case getUsersActionType.pending: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(true, false, false, null),
            },
            roles: {
                ...promiseState(true, false, false, null),
            },
        });
    }

    case getUsersActionType.fulfilled: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    }

    case getUsersActionType.rejected: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, false, true, null),
            },
        });
    }

    case createUserActionType.pending: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(true, false, false, state.users.data),
            },
        });
    }

    case createUserActionType.fulfilled: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, true, false, [...state.users.data, action.payload]),
            },
        });
    }

    case createUserActionType.rejected: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, false, true, state.users.data),
            },
        });
    }

    case updateUserActionType.pending: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(true, false, false, state.users.data),
            },
        });
    }

    case updateUserActionType.fulfilled: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, true, false, state.users.data),
            },
        });
    }

    case updateUserActionType.rejected: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, false, true, state.users.data),
            },
        });
    }

    case getRolesActionType.pending: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, false, true, state.users.data),
            },
            roles: {
                ...promiseState(true, false, false, null),
            },
        });
    }

    case getRolesActionType.fulfilled: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, false, true, state.users.data),
            },
            roles: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    }

    case getRolesActionType.rejected: {
        return Object.assign({}, state, {
            users: {
                ...promiseState(false, false, true, state.users.data),
            },
            roles: {
                ...promiseState(false, false, true, null),
            },
        });
    }
    default: return state;
    }
};

export default userManagementReducer;
