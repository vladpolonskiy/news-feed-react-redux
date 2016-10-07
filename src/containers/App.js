import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';

class App extends Component {

  componentWillMount() {
  	this.props.actions.getNews();
  }

  render() {
    return (
      <div className="app container">
        <div className="app-header">
          <h1>News Feed</h1>
        </div>
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }


}

let mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(null, mapDispatchToProps)(App);
