import React from 'react';

export default class NewsCommentAdd extends React.Component {
	constructor(props) {
		super(props);
		this.addComment = this.addComment.bind(this);
	}

	addComment(e) {
		e.preventDefault();
		this.props.handleClick(this.refs.comment_content.value);
		this.refs.comment_content.value = '';
	}

	render() {
		return (
			<div className="add-comment form-group">
				<label htmlFor="add-comment-text">Your comment:</label>
    			<textarea ref="comment_content" className="form-control" id="add-comment-text" rows="3" placeholder="Enter your comment here"></textarea>
    			<button onClick={this.addComment} className="btn btn-primary">Post</button>
			</div>
		);
	}
}