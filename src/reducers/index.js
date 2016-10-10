import {combineReducers} from 'redux';
import news from './News';
import users from './Users';
import sort from './Sort';
import current_user from './CurrentUser';

const rootReducer = combineReducers({
	news,
	users,
	current_user,
	sort
});

export default rootReducer;