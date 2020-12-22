import { combineReducers } from 'redux';
import heroes from './heroes';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';
export default combineReducers({
    heroes,
});
