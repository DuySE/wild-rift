import {
  all, put, call,
  takeLeading,
} from 'redux-saga/effects';

import {
  HEROES_IMPORT,
  HEROES_EXPORT,
  HEROES_UPDATE_ONE,
  HEROES_GET_ONE,
  HEROES_DELETE_ONE,
  HEROES_CREATE_ONE,
  HEROES_GET_LIST,
  actions as HeroesActions,
} from '../../reducers/heroes';
import heroesApis from '../../apis/heroes';

export function* handleImportHeroes({file}) {
  try {
    const { response, error } = yield call(heroesApis.uploadHeroes, file)
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleImportSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleImportFailed(error.message));
  }
}

export function* handleFetchListHeroes() {
  try {
    const { response, error } = yield call(heroesApis.fetchListHeroes)
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleGetListSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleGetListFailed(error.message));
  }
}

export function* handleUpdateHeroes({id, heroes}) {
  try {
    const { response, error } = yield call(heroesApis.updateHeroes, id, heroes)
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleUpdateOneSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleUpdateOneFailed(error.message));
  }
}

export function* handleFetchHeroes({id}) {
  try {
    const { response, error } = yield call(heroesApis.fetchHeroes, id);
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleGetOneSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleGetOneFailed(error.message));
  }
}

export function* handleExportHeroes({filter}) {
  try {
    const { response, error } = yield call(heroesApis.exportHeroes, filter)
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleExportSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleExportFailed(error.message));
  }
}

export function* handleCreateHeroes({heroes}) {
  try {
    const { response, error } = yield call(heroesApis.createHeroes, heroes)
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleCreateOneSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleCreateOneFailed(error.message));
  }
}

export function* handleDeleteHeroes({id}) {
  try {
    const { response, error } = yield call(heroesApis.removeHeroes, id)
    if (error) throw error;
    const { data } = response;
    yield put(HeroesActions.handleDeleteOneSuccess(data));
  } catch (error) {
    yield put(HeroesActions.handleDeleteOneFailed(error.message));
  }
}

export default function* () {
  yield all([
    takeLeading(HEROES_IMPORT, handleImportHeroes),
    takeLeading(HEROES_GET_LIST, handleFetchListHeroes),
    takeLeading(HEROES_UPDATE_ONE, handleUpdateHeroes),
    takeLeading(HEROES_GET_ONE, handleFetchHeroes),
    takeLeading(HEROES_EXPORT, handleExportHeroes),
    takeLeading(HEROES_CREATE_ONE, handleCreateHeroes),
    takeLeading(HEROES_DELETE_ONE, handleDeleteHeroes),
  ]);
}
