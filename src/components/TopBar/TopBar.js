import React, { Component } from 'react';
import logo from '../../img/logo.jpg';
import {Link} from 'react-router-dom'
import Input from '../Input/Input';
import Search from '../Search/Search';
import {connect} from 'react-redux'
import {logoutSuccess} from '../../redux/authActions'

class TopBar extends Component {
   

    render() {
        console.log(this.props)
        const {onLogoutSuccess} = this.props
        const {isLoggedIN,username,balance} = this.props.store
        let Links=(
            <ul className="navbar-nav ms-auto me-3">
                <li>
                    <Link className='nav-link' to="/signup">
                        Sign up
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/signin">
                        Sign in
                    </Link>
                </li>
            </ul>
        )
        if(isLoggedIN){
            Links=(
            <ul className="navbar-nav ms-auto me-3">
                <li>
                    <Link className='nav-link disabled-link' to="/balance">
                        {balance+"$ "}
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/history">
                        History
                    </Link>
                </li>
                <li>
                    {/* <Link className='nav-link' to={`/user/${username}`}> */}
                    <Link className='nav-link' to="/profile">
                        {username}
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' onClick={onLogoutSuccess} to="/">
                        Logout
                    </Link>
                </li>
            </ul>
            )
        }
        return (
            <div className='shadow-sm bg-light'>
                <nav className="navbar navbar-expand-lg container-flex navbar-container navbar-dark bg-dark">
                    <Link className="navbar-brand ms-4" to="/">
                        <img className="navbar-logo me-2"src={logo} width="60" alt="FastAndBestLogo"></img>
                        FAST AND BEST
                    </Link>
                    <ul className="navbar-nav">
                        <li>
                            <Link className='nav-link' to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="/games">
                                Games?TBD
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="/support">
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="/discord">
                                Discord
                            </Link>
                        </li>
                    </ul>
                    <Search/>
                    {Links}
                </nav>
            </div>
        );
        
    }
}
const mapStateToProps = (store) =>{
    return {
        store
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLogoutSuccess: () => dispatch(logoutSuccess())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopBar);