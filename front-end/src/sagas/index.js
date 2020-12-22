import {
    all, call,
} from 'redux-saga/effects';

import heroesSagas from './Heroes';
import itemsSagas from './Items';

export default function* rootSaga() {
    yield all([
        heroesSagas(),
        itemsSagas()
    ]);
}
