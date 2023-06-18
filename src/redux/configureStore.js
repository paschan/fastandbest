import {createStore} from 'redux'
import authReducer from './authReducer'

const loggedInState={
    isLoggedIN: true,
    username: 'Paschan',
    balance:"0", 
    email:'bakirr.arda@gmail.com',
    password:undefined,
    id:undefined
}

const defaultState={
    isLoggedIN: false,
    username: undefined,
    balance:undefined, 
    email:undefined,
    password:undefined,
    id:undefined
}




const configureStore = () =>{
    return createStore(authReducer,defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default configureStore