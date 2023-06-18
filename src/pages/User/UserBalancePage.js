import React, { Component } from 'react';
// import { Authentication } from "../../shared/AuthenticationContext";
import Input from '../../components/Input/Input';
import ButtonWithProgress from '../../components/ButtonWithProgress/ButtonWithProgress';
import {connect} from 'react-redux'

class UserBalancePage extends Component {
    render() {
        const {username,email,balance} = this.props.store
        return (
            <div className="container-fluid">
                <div className="row form-container">
                    <div className="form form--balance flex min-h-screen item-center p-6">
                        <div className="form-content-profile">
                            <h3 className="form-labels form-title">Balance  {balance}$</h3>
                            <div className='form-item'></div>
                            <div className='form-item d-flex'>
                                <div className='col-md-4'>
                                    <ButtonWithProgress text='Add Balance'/>
                                </div>
                                <div className='col-md-4 ms-auto'>
                                    <ButtonWithProgress text='Withdraw'/>
                                </div>
                                {/* <ButtonWithProgress disabled={pendingApiCall || passwordrepeat!==undefined} text="Sign up" onClick ={this.OnClickSignup} pendingApiCall={pendingApiCall}/> */}
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (store) =>{
    return {
        store
    }
}

export default connect(mapStateToProps)(UserBalancePage);