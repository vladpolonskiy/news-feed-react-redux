import React from 'react';
import News from '../components/News';
import NewsCommentAdd from '../components/NewsCommentAdd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';

class NewsListItem extends React.Component {
	constructor(props) {
		super(props);
		this.postComment = this.postComment.bind(this);
	}

	postComment(text) {
		let author = this.props.users.find((element) => (element.login === this.props.current_user)).visible_name;
		let now = new Date();
		let date = (now.getMonth() + 1) + "." + now.getDate() + "." + now.getFullYear();
		let itemId = parseInt(this.props.routeParams.id, 10);
		
		let comment = {text, author, date};

		this.props.actions.postComment(itemId, comment);
	}

	createPropsFromStore() {
		let items = this.props.news,
			itemId = parseInt(this.props.routeParams.id, 10),
			item = items.find((element) => (element.id === itemId));

		return {
			rate: this.props.actions.rate,
			unrate: this.props.actions.unrate,
			single: true,
			...item 
		};
	}

	render() {
		let props = this.createPropsFromStore();
		let commentsAddTemplate = !!this.props.current_user ? (<NewsCommentAdd handleClick={this.postComment} />) : null;
		let newsItem = (
			<div>
			  <div className="app-header">
			    <h1>{props.title}</h1>
			  </div>
			  <div className="app-content">
		          <News {...props} />
		          {commentsAddTemplate}
		      </div>
		    </div>
		);
		
		return newsItem;
	}
}

let mapStateToProps = (state) => ( {...state} );
let	mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(NewsListItem);