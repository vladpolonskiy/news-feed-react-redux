import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';

class App extends Component {

  componentWillMount() {
    if (!this.props.news)
  	 this.props.actions.getNews();
  }

  render() {
    return (
      <div className="app container">
          {this.props.children}
      </div>
    );
  }


}

let mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(null, mapDispatchToProps)(App);
