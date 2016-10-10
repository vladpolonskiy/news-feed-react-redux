import React from 'react';
import {Link} from 'react-router';
import NewsComments from './NewsComments';

export default class News extends React.Component {
	
	static defaultProps = {
		comments: []
	}

	render() {
		let {single, id, title, description, comments, author, date, rating, image, rate, unrate} = this.props;
		
		let headerTemplate = (!single) ? (<h3 className="news-item-title"><Link to={"/news/" + id}>{title}</Link></h3>) : null,
			descriptionTemplate = (!!single) ? (<p className="news-item-description">{description}</p>) : null,
			commentsTemplate = (!!single) ? (<NewsComments comments={comments} />) : null;

		return (
			<div className="news-item">
				{headerTemplate}
				<div className="news-item-thumbnail">
					<img src={image} alt="" />
				</div>
				{descriptionTemplate}
				<div className="news-item-footer">
						<span className="news-item-rating-label">Rating: </span>
						<button onClick={() => rate(id)} className="btn btn-small btn-success">+</button> 
							<span className="news-item-rating">{rating}</span>
						<button onClick={() => unrate(id)} className="btn btn-small btn-danger">-</button>
					<div className="news-item-info">
						<div className="news-item-author"><b>Author:</b> <span>{author}</span></div>
						<div className="news-item-date"><b>Date:</b> <span>{date}</span></div>
					</div>
				</div>
				{commentsTemplate}
			</div>
		);
	}
}