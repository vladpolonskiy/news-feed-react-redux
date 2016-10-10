import {RATE, UNRATE, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, POST_COMMENT} from '../constants/ActionTypes';

export default function news(state = [], action) {
	let newState = [...state];
	
	switch (action.type) {
		case RATE:
		case UNRATE:
			newState = state.map((news) => {
				if (news.id === action.id) {
					news.rating = rating(news.rating, action);
				}
				return news;
			});
			break;

		case POST_COMMENT:
			newState = state.map((news) => {
				if (news.id === action.id) {
					news.comments.push(action.comment);
				}
				return news;
			});
			break;

		case FETCH_NEWS_SUCCESS:
			newState = [...action.news];
			break;

		case FETCH_NEWS_ERROR:
			console.log('=========================');
			console.log(action);
			console.log('=========================');
			break;

		default: 
			break;
	}

	return newState;
}

function rating(state = 0, action) {
	switch (action.type) {
		case RATE: 
			return ++state;
		case UNRATE: 
			return --state;
		default: 
			return state;
	}
}