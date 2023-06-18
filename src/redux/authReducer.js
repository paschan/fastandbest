import * as ACTIONS from './constants'

const defaultState={
    isLoggedIN: false,
    username: undefined,
    balance:undefined, 
    email:undefined,
    password:undefined,
    id:undefined
}
const authReducer =(state={...defaultState},action) =>{
    if(action.type ===ACTIONS.LOGOUT_SUCCESS){
        return defaultState
    }
    if(action.type === ACTIONS.LOGIN_SUCCESS){
        return{
            ...action.payload,
            isLoggedIN:true
        }
    }
    return state;
}

export default authReducer