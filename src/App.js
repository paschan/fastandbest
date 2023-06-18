import './App.css';
import React from 'react';
import UserSignupPage from './pages/User/UserSignupPage'
import UserProfilePage from './pages/User/UserProfilePage';
import UserSigninPage from './pages/User/UserSigninPage'
import HomePage from './pages/HomePage';
import GamesPage from './pages/Games/GamesPage'
import SupportPage from './pages/SupportPage';
import DiscordPage from './pages/DiscordPage';
import UserBalancePage from './pages/User/UserBalancePage';
import {HashRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
import TopBar from './components/TopBar/TopBar';
import UserHistoryPage from './pages/User/UserHistoryPage';
import {connect} from 'react-redux';

class App extends React.Component{
  render() {
    const isLoggedIN=this.props.store.isLoggedIN;
    return (
      <Router>
        <TopBar/>
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            {!isLoggedIN && (
              <Route path="/signin" component={UserSigninPage}/>  
            )}
            <Route path="/signup" component={UserSignupPage}/>
            <Route path="/games" component={GamesPage}/>
            <Route path="/discord" component={DiscordPage}/>
            <Route path="/support" component={SupportPage}/>
            {isLoggedIN && (
              <Route path="/profile" component={UserProfilePage}/>
            )}
            {isLoggedIN && (
              <Route path="/history" component={UserHistoryPage}/>
            )}
            {isLoggedIN && (
              <Route path="/balance" component={UserBalancePage}/>
            )}
            {/* <Route path="/user/:username" component={props=>{
              return <UserProfilePage {...props} username={username}/>
            }}/> */}
            <Redirect to="/"/>
          </Switch>
        </React.StrictMode>
      </Router>    
    );
  }
}

const mapStateToProps = (store) =>{
  return {
      store
  }
}
export default connect(mapStateToProps)(App);
