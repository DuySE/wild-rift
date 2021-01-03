import { all } from 'redux-saga/effects'
import heroesSaga from './heroes'

export default function* rootSaga() {
  yield all([
    heroesSaga(),
  ])
}
