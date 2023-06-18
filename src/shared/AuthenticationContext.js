import React, { Component } from 'react';

export const Authentication = React.createContext();

class AuthenticationContext extends Component {
    state={
        isLoggedIN: false,
        username: undefined,
        balance:undefined,
        email:undefined,
        password:undefined,
        id:undefined
    }
    onLoginSuccess = authState =>{
        this.setState({
          ...authState,
          isLoggedIN:true
        })
    }
    onLogoutSuccess = () =>{
        this.setState({
          isLoggedIN:false,
          username:undefined
        })
     }
    render() {
        return (
            <Authentication.Provider value={{
                state:{...this.state},
                onLoginSuccess:this.onLoginSuccess,
                onLogoutSuccess:this.onLogoutSuccess
            }}>
                {this.props.children}
            </Authentication.Provider>
        );
    }
}

export default AuthenticationContext;