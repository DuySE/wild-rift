import { combineReducers } from 'redux';
import heroes from './heroes';
import profile from './profile';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';
export default combineReducers({
    heroes,
    profile,
});
