import { combineReducers } from 'redux';
import heroes from './heroes';
import items from './items';

export const REHYDRATE_COMPLETE = 'root/REHYDRATE_COMPLETE';
export default combineReducers({
    heroes, items
});
