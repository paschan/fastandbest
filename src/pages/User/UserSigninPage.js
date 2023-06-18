import React from "react";
import {signin} from '../../api/ApiCall';
import Input from "../../components/Input/Input";
import ButtonWithProgress from "../../components/ButtonWithProgress/ButtonWithProgress";
import { withApiProgress } from "../../shared/ApiProgress";
import imageSignup from '../../img/img-signup-form.png';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginSuccess} from '../../redux/authActions' 

class userSigninPage extends React.Component{
    state ={
        username: null,
        password :null,
        errors: null,
        wrongEntry:false,
    }
    onChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name]:value,
            errors:null,
            wrongEntry:false
        })
    }
    OnClickSignin = async event =>{
        event.preventDefault();
        const {username ,password} = this.state
        const {push} = this.props.history
        this.setState({
            errors:null
        })
        const creds={
            username,
            password
        }
        try{
            const response = await signin(creds)
            push("/")
            const authState={
                ...response.data,
                // password:password,
                
            }
            this.props.onLoginSuccess(authState)
            // onLoginSuccess(authState)
        }catch(apiError){
            this.setState({
                errors: apiError.response.data.message,
                wrongEntry:true
            })
        }
                
    }
    render(){
        const {pendingApiCall} = this.props;
        const {username,password,errors,wrongEntry} = this.state;
        const buttonEnabled = username&&password
        
        return(
            <div className="container-fluid">
                <div className="row form-container">
                    <div className="form form--signin flex min-h-screen item-center p-6">
                        <div className="form-image">
                            <img src={imageSignup} className="form--image img-fluid mx-auto" alt="..."/>
                        </div> 
                        <div className="form-content">
                        <h3 className="form-labels form-title">SIGN IN</h3>
                            <div className="form-item">
                                <Input  label="Username" name="username" placeholder="Enter Username" onChange={this.onChange}/>
                            </div>
                            <div className="form-item">
                                <Input  label="Password" name="password" placeholder="Enter Password" type="password" onChange={this.onChange}/>
                            </div>
                            <div className="form-item">
                                <ButtonWithProgress onClick={this.OnClickSignin} pendingApiCall={pendingApiCall} text={"Sign in"} disabled={(!buttonEnabled || pendingApiCall) || wrongEntry} />
                            </div>
                            <div className="form-item form-labels text-end">
                                <Link className='nav-link' to="/signup">
                                    Don`t have an account?
                                </Link>
                            </div>
                            <div className="form-item">
                                {errors && <div className="alert alert-danger col-md-12 text-center mt-8">Wrong username or password</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}
// const mapStateToProps = (store) =>{
//         return {
//             store
//         }
//     }
const mapDispatchToProps = (dispatch) =>{
    return{
        onLoginSuccess : (authState) =>  dispatch(loginSuccess(authState))
        }
    }

const UserSigninPageWithApiProgress = withApiProgress(userSigninPage,'/auth');
export default connect(null,mapDispatchToProps)(UserSigninPageWithApiProgress)