import promiseState from 'shared/utils/reduxReducerHelper';

import { loginActionType, resetPasswordAsyncActionType } from './loginActions';

const initialState = {
    login: {
        ...promiseState(false, false, false, null),
    },
    resetPassword: {
        ...promiseState(false, false, false, null),
    },
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case loginActionType.pending:
        return Object.assign({}, state, {
            login: {
                ...promiseState(true, false, false, null),
            },
        });
    case loginActionType.fulfilled:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case loginActionType.rejected:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, false, true, null),
            },
        });
    case resetPasswordAsyncActionType.pending:
        return Object.assign({}, state, {
            resetPassword: {
                ...promiseState(true, false, false, null),
            },
        });
    case resetPasswordAsyncActionType.fulfilled:
        return Object.assign({}, state, {
            resetPassword: {
                ...promiseState(false, true, false, null),
            },
        });
    case resetPasswordAsyncActionType.rejected:
        return Object.assign({}, state, {
            resetPassword: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default loginReducer;
