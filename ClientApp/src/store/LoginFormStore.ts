import {Action, Reducer} from 'redux';

export interface LoginState {
    login: string;
    password: string;
}

export interface LoginAction {
    type: 'LOGIN_ACTION'
}


export const reducer: Reducer < LoginState > = (state : LoginState | undefined, incomingAction : LoginAction) : LoginState => {
    if (state === undefined) {
        return {login: "", password: ""};
    }

    const action = incomingAction;
    switch (action.type) {
        case 'LOGIN_ACTION':
            return {login: state.login, password: state.password};
        default:
            return state;
    }
};

