import { Action, Reducer } from 'redux';

export interface LoginState {
    login: string;
    password: string;
}

export interface LoginAction { type: 'LOGIN_ACTION' }


export type KnownAction = LoginAction;

export const actionCreators = {
    login: () => ({ type: 'LOGIN_ACTION' } as LoginAction),
};

export const reducer: Reducer<LoginState> = (state: LoginState | undefined, incomingAction: Action): LoginState => {
    if (state === undefined) {
        return { 
            login: "",
            password: ""
         };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'LOGIN_ACTION':
            return {
                 login: state.login,
                 password: state.password 
                };
        default:
            return state;
    }
};
