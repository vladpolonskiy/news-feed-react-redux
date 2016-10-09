import {RATE, UNRATE, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../constants/ActionTypes';

export function rate(id) {
	return {type: RATE, id: id};
}

export function unrate(id) {
	return {type: UNRATE, id: id};
}

export function getNews() {
	return (dispatch) => fetchNews().then(
				(news) => dispatch( {type: FETCH_NEWS_SUCCESS, news: news} ), 
				(error) => dispatch( {type: FETCH_NEWS_ERROR, message: error} )
			);
}

export function getUsers() {
	return (dispatch) => fetchUsers().then(
				(users) => dispatch( {type: FETCH_USERS_SUCCESS, users: users} ), 
				(error) => dispatch( {type: FETCH_USERS_ERROR, message: error} )
			);
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