import React from 'react';

export default class NewsComments extends React.Component {
	render() {
		let newsCommentsTemplate;

		if (this.props.comments.length > 0) {
			// Display comments, sorted by date
			let commentsSorted = this.props.comments.sort((a, b) => ( new Date(b.date).getTime() - new Date(a.date).getTime() ));

			newsCommentsTemplate = (
				<div className="comments-template">
					<h3>Comments: </h3>
					{
						commentsSorted.map((commentsItem, index) => (
							<blockquote key={index}>
								<p>{commentsItem.text}</p>
								<cite>
									<div className="comments-author">Author: <span>{commentsItem.author}</span></div>
									<div className="comments-date">Commented on: <span>{commentsItem.date}</span></div>
								</cite>
							</blockquote>))
					}
				</div>
			);
		} else {
			newsCommentsTemplate = (<div className="comments-template no-comments"><h3>There is no comments yet.</h3></div>)
		}

		return newsCommentsTemplate;
	}
}