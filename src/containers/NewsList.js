import React from 'react';
import News from '../components/News';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';

class NewsList extends React.Component {
	componentWillMount() {
		if (localStorage.getItem('n_sort'))
			return;

		localStorage.setItem('n_sort', 'none');
	}

	sortChange(type) {
		localStorage.setItem('n_sort', type);
		this.forceUpdate();
	}

	render() {
		let sort = localStorage.getItem('n_sort'),
			news = this.props.news;

		switch (sort) {
			case 'rating':
				news = news.sort( (a, b) => (a.rating - b.rating) );
				break;

			case 'date':
				news = news.sort( (a, b) => ( new Date(a.date).getTime() - new Date(b.date).getTime() ) );
				break;

			default:
				break;
		}

		return (
			<div className="news-list">
				<div className="toolbar">
					<span>Order by:</span> 
					<select defaultValue={localStorage.getItem('n_sort')} onChange={(e) => {this.sortChange(e.target.value);} }>
						<option>none</option>
						<option>date</option>
						<option>rating</option>
					</select>
				</div>
				{news.map(
					(newsItem) =>  
						<News rate={this.props.actions.rate} unrate={this.props.actions.unrate} author={newsItem.author} date={newsItem.date} image={newsItem.image} key={newsItem.id} id={newsItem.id} description={newsItem.description} title={newsItem.title} rating={newsItem.rating} />
				)}
			</div>
		);
	}
}

let mapStateToProps = (state) => ( {...state} );
let	mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);