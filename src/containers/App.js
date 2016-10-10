import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import _ from 'lodash/array';
import {Link} from 'react-router';

class App extends Component {

  componentWillMount() {
    if (this.props.news.length < 1) {
  	 this.props.actions.getNews();
    }

    if (this.props.users.length < 1) {
     this.props.actions.getUsers();
    }
  }

  render() {
    let signInClass = this.props.routes[this.props.routes.length -1].path === '/login' ? 'hidden' : '';

    let curUser = (!!this.props.current_user) ? 
                        this.props.users[_.findIndex(this.props.users, {login: this.props.current_user})] : 
                        null;

    let singIn = (!!curUser) ? 
                      (<div className="app-toolbar">
                        <span className="sign-in">Signed as {curUser.visible_name}</span>
                        <span> / </span>
                        <span onClick={() => (this.props.actions.logOut())} className="log-out">Log out</span>
                      </div>) : 
                      (<div className="app-toolbar">
                        <span className={"sign-in " + signInClass}><Link to="/login">Sign In</Link></span>    
                      </div>);

    return (
      <div className="app container">
          {singIn}
          {this.props.children}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({...state});
let mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(App);
