import {
  all, put, call,
  takeLeading,
} from 'redux-saga/effects';

import {
  PROFILE_DELETE_ONE,
  PROFILE_GET_ONE,
  PROFILE_CREATE_ONE,
  PROFILE_UPDATE_ONE,
  PROFILE_IMPORT,
  PROFILE_EXPORT,
  PROFILE_GET_LIST,
  actions as ProfileActions,
} from '../reducers/profile';
import profileApis from '../apis/profile';

export function* handleImportProfile({file}) {
  try {
    const { response, error } = yield call(profileApis.uploadProfile, file)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleImportSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleImportFailed(error.message));
  }
}

export function* handleFetchListProfile() {
  try {
    const { response, error } = yield call(profileApis.fetchListProfile)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleGetListSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleGetListFailed(error.message));
  }
}

export function* handleUpdateProfile({id, profile}) {
  try {
    const { response, error } = yield call(profileApis.updateProfile, id, profile)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleUpdateOneSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleUpdateOneFailed(error.message));
  }
}

export function* handleFetchProfile({id}) {
  try {
    const { response, error } = yield call(profileApis.fetchProfile, id)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleGetOneSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleGetOneFailed(error.message));
  }
}

export function* handleExportProfile({filter}) {
  try {
    const { response, error } = yield call(profileApis.exportProfile, filter)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleExportSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleExportFailed(error.message));
  }
}

export function* handleCreateProfile({profile}) {
  try {
    const { response, error } = yield call(profileApis.createProfile, profile)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleCreateOneSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleCreateOneFailed(error.message));
  }
}

export function* handleDeleteProfile({id}) {
  try {
    const { response, error } = yield call(profileApis.removeProfile, id)
    if (error) throw error;
    const { data } = response;
    yield put(ProfileActions.handleDeleteOneSuccess(data));
  } catch (error) {
    yield put(ProfileActions.handleDeleteOneFailed(error.message));
  }
}

export default function* () {
  yield all([
    takeLeading(PROFILE_IMPORT, handleImportProfile),
    takeLeading(PROFILE_GET_LIST, handleFetchListProfile),
    takeLeading(PROFILE_UPDATE_ONE, handleUpdateProfile),
    takeLeading(PROFILE_GET_ONE, handleFetchProfile),
    takeLeading(PROFILE_EXPORT, handleExportProfile),
    takeLeading(PROFILE_CREATE_ONE, handleCreateProfile),
    takeLeading(PROFILE_DELETE_ONE, handleDeleteProfile),
  ]);
}
