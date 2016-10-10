import {
		SIGN_IN, 
		LOG_OUT,
		RATE,
		UNRATE,
		FETCH_NEWS_SUCCESS,
		FETCH_NEWS_ERROR,
		FETCH_USERS_SUCCESS,
		FETCH_USERS_ERROR,
		POST_COMMENT,
		SORT
	} from '../constants/ActionTypes';

export function signIn(login) {
	return {type: SIGN_IN, login};
}

export function logOut() {
	return {type: LOG_OUT};
}

export function rate(id) {
	return {type: RATE, id};
}

export function unrate(id) {
	return {type: UNRATE, id};
}

export function setSort(sort_type) {
	return {type: SORT, sort_type};
}

export function getNews() {
	return (dispatch) => fetchNews().then(
				(news) => dispatch( {type: FETCH_NEWS_SUCCESS, news} ), 
				(error) => dispatch( {type: FETCH_NEWS_ERROR, message: error} )
			);
}

export function getUsers() {
	return (dispatch) => fetchUsers().then(
				(users) => dispatch( {type: FETCH_USERS_SUCCESS, users} ), 
				(error) => dispatch( {type: FETCH_USERS_ERROR, message: error} )
			);
}

export function postComment(newsId, comment) {
	return {type: POST_COMMENT, id: newsId, comment: comment};
}

/**
* Helper functions
**/
function fetchNews() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).news);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', '/db/news.json');
	    xhr.send();
	});
}

function fetchUsers() {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
	    	if (xhr.readyState === 4) {
	    		if (xhr.status === 200) {
	    			resolve(JSON.parse(xhr.responseText).users);
	    		} else {
	    			reject(xhr.responseText.error);
	    		}
	    	} 
	    };
	    xhr.open('GET', '/db/users.json');
	    xhr.send();
	});
}