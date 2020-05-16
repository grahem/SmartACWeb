import { LoginState } from '../store/LoginFormStore'

export const login = {
    login: (user: LoginState) => ({ 
        type: 'LOGIN_ACTION',
        paload: user
    }),
};