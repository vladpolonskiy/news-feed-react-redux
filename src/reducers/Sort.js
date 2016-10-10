import {SORT} from '../constants/ActionTypes';

export default function sort(state = 'none', action) {

	if (action.type === SORT)
		return action.sort_type;

	return state;
}