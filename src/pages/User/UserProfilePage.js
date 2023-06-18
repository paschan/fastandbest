import React, { Component } from 'react';
import ButtonWithProgress from '../../components/ButtonWithProgress/ButtonWithProgress';
import Input from '../../components/Input/Input';
import { withApiProgress } from "../../shared/ApiProgress";
import {connect} from 'react-redux'


class UserProfilePage extends Component {
    render(){
        const {username,email,balance,password} = this.props.store
        return(
            <div className="container-fluid">
                <div className="row form-container">
                    <div className="form flex min-h-screen item-center p-6">
                        <div className="form-content-profile">
                            <h3 className="form-labels form-title">Profile</h3>
                            <div className="form-item">
                                <Input label="Username" name="username" placeholder={username} disabled={true} onChange={this.onChange}/>
                            </div>
                            <div className="form-item">
                                <Input label="Email" name="email" placeholder={email} onChange={this.onChange}/>
                            </div>
                            <div className="form-item">
                                <Input label="Password" name="password" placeholder="Enter Password" type="password" onChange={this.onChange}/>
                            </div>
                            <div className="form-item">
                                <Input label="Password Repeat" name="passwordrepeat" placeholder="Enter Password Repeat" onChange={this.onChange} type="password"/>
                            </div>   
                            <div className='form-item'>
                                <ButtonWithProgress text='Save Changes'/>
                            </div> 
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (store) =>{
    return {
        store
    }
}

export default connect(mapStateToProps)(UserProfilePage);
// const UserProfilePageWithApiProgress = withApiProgress(UserProfilePage,'/profile');
// export default UserProfilePageWithApiProgress