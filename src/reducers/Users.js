import {FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../constants/ActionTypes';

export default function users(state = [], action) {
	let newState = [...state];

	switch (action.type) {
		
		case FETCH_USERS_SUCCESS:
			newState = [...action.users];
			break;

		case FETCH_USERS_ERROR:
			console.log('=========================');
			console.log(action);
			console.log('=========================');
			break;

		default: 
			break;
	}

	return newState;
}