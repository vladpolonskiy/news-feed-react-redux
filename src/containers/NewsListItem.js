import React from 'react';
import News from '../components/News';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import _ from 'lodash/array';

class NewsListItem extends React.Component {
	createPropsFromStore() {
		let items = this.props.news,
			itemId = parseInt(this.props.routeParams.id, 10),
			item = items[ _.findIndex(items, {id: itemId}) ];

		return {
			rate: this.props.actions.rate,
			unrate: this.props.actions.unrate,
			single: true,
			...item 
		};
	}

	render() {
		let props = this.createPropsFromStore();	
		return (
			<div className="app container">
			  <div className="app-header">
			    <h1>{props.title}</h1>
			  </div>
			  <div className="app-content">
		          <News {...props} />
		        </div>
		      </div>
			);
	}
}

let mapStateToProps = (state) => ( {...state} );
let	mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(NewsListItem);