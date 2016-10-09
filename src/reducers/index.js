import {combineReducers} from 'redux';
import news from './News';
import users from './Users';

const rootReducer = combineReducers({
	news,
	users
});

export default rootReducer;