import React from "react";
import Input from "../components/Input/Input";
import ButtonWithProgress from "../components/ButtonWithProgress/ButtonWithProgress";
import {signup} from '../api/ApiCall';



class HomePage extends React.Component{
    state ={
        username: null,
        email: null,
        password :null,
        passwordrepeat :null,
        pendingApiCall: false,
        errors:{}
    }
    onChange = event =>{
        const {name,value}=event.target;
        const errors={...this.state.errors}
        errors[name] = undefined
        if(name === 'password' || name ==='passwordrepeat'){
            if( name==='password' && value !== this.state.passwordrepeat){
                errors.passwordrepeat = 'Sifreler eslesmiyor!'
            }
            else if(name==='passwordrepeat' && value!== this.state.password){
                errors.passwordrepeat = 'Sifreler eslesmiyor!'
            }
            else{
                errors.passwordrepeat = undefined
            }
        }
        this.setState({
            [name]: value,
            errors
        })
        
    }
    OnClickSignup = async event =>{
        event.preventDefault();
        const {username ,email ,password} = this.state
        const body = {
            username,
            email,
            password
        }
        this.setState({pendingApiCall :true})
        try{
            const response = await signup(body)
        }catch(error){
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors})
            }
        }
        this.setState({pendingApiCall:false})        
    }

    render(){
        const {pendingApiCall,errors} = this.state;
        const {username,email,password,passwordrepeat} = errors;
            return(
                <div className="container-fluid">
                    <div className="row form-container">
                        <div className="form form--signin flex min-h-screen item-center p-6">
                            <h1>HOME PAGE</h1>
                        </div>
                    </div>
                </div>
            );
    }
}
export default HomePage