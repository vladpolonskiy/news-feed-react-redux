import {combineReducers} from 'redux';
import news from './News';
import users from './Users';
import current_user from './CurrentUser';

const rootReducer = combineReducers({
	news,
	users,
	current_user
});

export default rootReducer;