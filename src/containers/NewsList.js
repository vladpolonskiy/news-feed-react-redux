import React from 'react';
import News from '../components/News';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';

class NewsList extends React.Component {
	render() {
		let sort = this.props.sort,
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
		<div>
			<div className="app-header">
	          <h1>News Feed</h1>
	        </div>
	        <div className="app-content">
				<div className="news-list">
					<div className="toolbar">
						<span>Order by:</span> 
						<select defaultValue={this.props.sort} onChange={(e) => {this.props.actions.setSort(e.target.value)} }>
							<option>none</option>
							<option>date</option>
							<option>rating</option>
						</select>
					</div>
					{news.map(
						(newsItem) =>  
							<News rate={this.props.actions.rate} unrate={this.props.actions.unrate}  key={newsItem.id} {...newsItem} />
					)}
				</div>
			</div>
		</div>
		);
	}
}

let mapStateToProps = (state) => ( {news: state.news, sort: state.sort} );
let	mapDispatchToProps = (dispatch) => ( {actions: bindActionCreators(actionCreators, dispatch)} );

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);