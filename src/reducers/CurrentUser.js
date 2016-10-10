import {SIGN_IN, LOG_OUT} from '../constants/ActionTypes';

export default function current_user(state = null, action) {

	switch (action.type) {
		
		case SIGN_IN:
			state = action.login;
			break;

		case LOG_OUT:
			state = null;
			break;

		default: 
			break;
	}

	return state;
}