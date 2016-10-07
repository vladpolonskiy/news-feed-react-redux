import {RATE, UNRATE, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR} from '../constants/ActionTypes';

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
	    xhr.open('GET', './db/news.json');
	    xhr.send();
	});
}