import * as ACTIONS from './constants'

export const logoutSuccess = () =>{
    return{
        type: ACTIONS.LOGOUT_SUCCESS
    }
}

export const loginSuccess = (authState) =>{
    return{
        type: ACTIONS.LOGIN_SUCCESS,
        payload : authState
    }
}


