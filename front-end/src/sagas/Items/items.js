import {
  all, put, call,
  takeLeading,
} from 'redux-saga/effects';

import {
  ITEMS_UPDATE_ONE,
  ITEMS_EXPORT,
  ITEMS_IMPORT,
  ITEMS_GET_ONE,
  ITEMS_GET_LIST,
  ITEMS_DELETE_ONE,
  ITEMS_CREATE_ONE,
  actions as ItemsActions,
} from '../../reducers/items';
import itemsApis from '../../apis/items';

export function* handleFetchItems({id}) {
  try {
    const { response, error } = yield call(itemsApis.fetchItems, id)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleGetOneSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleGetOneFailed(error.message));
  }
}

export function* handleDeleteItems({id}) {
  try {
    const { response, error } = yield call(itemsApis.removeItems, id)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleDeleteOneSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleDeleteOneFailed(error.message));
  }
}

export function* handleImportItems({file}) {
  try {
    const { response, error } = yield call(itemsApis.uploadItems, file)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleImportSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleImportFailed(error.message));
  }
}

export function* handleUpdateItems({id, items}) {
  try {
    const { response, error } = yield call(itemsApis.updateItems, id, items)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleUpdateOneSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleUpdateOneFailed(error.message));
  }
}

export function* handleCreateItems({items}) {
  try {
    const { response, error } = yield call(itemsApis.createItems, items)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleCreateOneSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleCreateOneFailed(error.message));
  }
}

export function* handleFetchListItems() {
  try {
    const { response, error } = yield call(itemsApis.fetchListItems)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleGetListSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleGetListFailed(error.message));
  }
}

export function* handleExportItems({filter}) {
  try {
    const { response, error } = yield call(itemsApis.exportItems, filter)
    if (error) throw error;
    const { data } = response;
    yield put(ItemsActions.handleExportSuccess(data));
  } catch (error) {
    yield put(ItemsActions.handleExportFailed(error.message));
  }
}

export default function* () {
  yield all([
    takeLeading(ITEMS_GET_ONE, handleFetchItems),
    takeLeading(ITEMS_DELETE_ONE, handleDeleteItems),
    takeLeading(ITEMS_IMPORT, handleImportItems),
    takeLeading(ITEMS_UPDATE_ONE, handleUpdateItems),
    takeLeading(ITEMS_CREATE_ONE, handleCreateItems),
    takeLeading(ITEMS_GET_LIST, handleFetchListItems),
    takeLeading(ITEMS_EXPORT, handleExportItems),
  ]);
}
