import React from 'react';
import {Link} from 'react-router';
import NewsComments from './NewsComments';

export default class News extends React.Component {
	
	static defaultProps = {
		comments: []
	}

	render() {
		let headerTemplate = (!this.props.single) ? (<h3 className="news-item-title"><Link to={"/news/" + this.props.id}>{this.props.title}</Link></h3>) : null,
			descriptionTemplate = (!!this.props.single) ? (<p className="news-item-description">{this.props.description}</p>) : null,
			commentsTemplate = (!!this.props.single) ? (<NewsComments comments={this.props.comments} />) : null;

		return (
			<div className="news-item">
				{headerTemplate}
				<div className="news-item-thumbnail">
					<img src={this.props.image} alt="" />
				</div>
				{descriptionTemplate}
				<div className="news-item-footer">
						<span className="news-item-rating-label">Rating: </span>
						<button onClick={() => this.props.rate(this.props.id)} className="btn btn-small btn-success">+</button> 
							<span className="news-item-rating">{this.props.rating}</span>
						<button onClick={() => this.props.unrate(this.props.id)} className="btn btn-small btn-danger">-</button>
					<div className="news-item-info">
						<div className="news-item-author"><b>Author:</b> <span>{this.props.author}</span></div>
						<div className="news-item-date"><b>Date:</b> <span>{this.props.date}</span></div>
					</div>
				</div>
				{commentsTemplate}
			</div>
		);
	}
}