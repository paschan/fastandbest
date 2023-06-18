import React from "react";
import {signup} from '../../api/ApiCall';
import Input from "../../components/Input/Input";
import ButtonWithProgress from "../../components/ButtonWithProgress/ButtonWithProgress";
import imageSignup from '../../img/img-signup-form.png';
import { withApiProgress } from "../../shared/ApiProgress";
import {Link} from 'react-router-dom'


class userSignupPage extends React.Component{
    state ={
        username: null,
        email: null,
        password :null,
        passwordrepeat :null,
        message:null,
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
        const {push} = this.props.history
        const body = {
            username,
            email,
            password
        }
        try{
            const response = await signup(body)
            push('/signin')
        }catch(error){
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors})
            }
        }  
    }
    render(){
        const {pendingApiCall} = this.props;
        const {errors} = this.state;
        const {username,email,password,passwordrepeat} = errors;
        return(
            <div className="container-fluid">
                    <div className="row form-container">
                        <div className="form form--signin flex min-h-screen item-center p-6">
                            <div className="form-image">
                                <img src={imageSignup} className="form--image img-fluid mx-auto" alt="..."/>
                            </div> 
                            <div className="form-content">
                                <h3 className="form-labels form-title">SIGN UP</h3>
                                    <div className="form-item">
                                        <Input label="Username" name="username" placeholder="Enter Username" error={username} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-item">
                                        <Input label="Email" name="email" placeholder="Enter Email" error={email} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-item">
                                        <Input label="Password" name="password" placeholder="Enter Password" error={password} onChange={this.onChange} type="password"/>
                                    </div>
                                    <div className="form-item">
                                        <Input label="Password Repeat" name="passwordrepeat" placeholder="Enter Password Repeat" error={passwordrepeat} onChange={this.onChange} type="password"/>
                                    </div>
                                    <div className="form-item">
                                        <ButtonWithProgress disabled={pendingApiCall || passwordrepeat!==undefined} text="Sign up" onClick ={this.OnClickSignup} pendingApiCall={pendingApiCall}/>
                                    </div>
                                    <div className="form-item form-labels text-end">
                                        <Link className='nav-link' to="/signin">
                                            Already have an account?
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
const UserSignupPageWithApiProgress = withApiProgress(userSignupPage,'/signup');
export default UserSignupPageWithApiProgress
// export default userSignupPage