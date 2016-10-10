import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import AppToolbar from '../components/AppToolbar';

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
    let onLoginClass = this.props.routes[this.props.routes.length -1].path === '/login' ? 'hidden' : '';
    let curUser = (!!this.props.current_user) ? 
                        this.props.users.find( (element) => (element.login === this.props.current_user) ) : 
                        null;

    return (
      <div className="app container">
          <AppToolbar logOut={() => (this.props.actions.logOut())} user={curUser} onLoginClass={onLoginClass}/>
          {this.props.children}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({news: state.news, users: state.users, current_user: state.current_user});
let mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(App);
