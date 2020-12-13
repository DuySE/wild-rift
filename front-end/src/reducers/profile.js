export const PROFILE_IMPORT = 'profile/IMPORT';
export const PROFILE_IMPORT_SUCCESS = 'profile/IMPORT_SUCCESS';
export const PROFILE_IMPORT_FAILED = 'profile/IMPORT_FAILED';
export const PROFILE_GET_LIST = 'profile/GET_LIST';
export const PROFILE_GET_LIST_SUCCESS = 'profile/GET_LIST_SUCCESS';
export const PROFILE_GET_LIST_FAILED = 'profile/GET_LIST_FAILED';
export const PROFILE_UPDATE_ONE = 'profile/UPDATE_ONE';
export const PROFILE_UPDATE_ONE_SUCCESS = 'profile/UPDATE_ONE_SUCCESS';
export const PROFILE_UPDATE_ONE_FAILED = 'profile/UPDATE_ONE_FAILED';
export const PROFILE_GET_ONE = 'profile/GET_ONE';
export const PROFILE_GET_ONE_SUCCESS = 'profile/GET_ONE_SUCCESS';
export const PROFILE_GET_ONE_FAILED = 'profile/GET_ONE_FAILED';
export const PROFILE_EXPORT = 'profile/EXPORT';
export const PROFILE_EXPORT_SUCCESS = 'profile/EXPORT_SUCCESS';
export const PROFILE_EXPORT_FAILED = 'profile/EXPORT_FAILED';
export const PROFILE_CREATE_ONE = 'profile/CREATE_ONE';
export const PROFILE_CREATE_ONE_SUCCESS = 'profile/CREATE_ONE_SUCCESS';
export const PROFILE_CREATE_ONE_FAILED = 'profile/CREATE_ONE_FAILED';
export const PROFILE_DELETE_ONE = 'profile/DELETE_ONE';
export const PROFILE_DELETE_ONE_SUCCESS = 'profile/DELETE_ONE_SUCCESS';
export const PROFILE_DELETE_ONE_FAILED = 'profile/DELETE_ONE_FAILED';

const handleImport = file => ({
    type: PROFILE_IMPORT,
    file,
})

const handleImportSuccess = file => ({
    type: PROFILE_IMPORT_SUCCESS,
    file,
})

const handleImportFailed = error => ({
    type: PROFILE_IMPORT_FAILED,
    error,
})

const handleGetList = list_profile => ({
    type: PROFILE_GET_LIST,
    list_profile,
})

const handleGetListSuccess = list_profile => ({
    type: PROFILE_GET_LIST_SUCCESS,
    list_profile,
})

const handleGetListFailed = error => ({
    type: PROFILE_GET_LIST_FAILED,
    error,
})

const handleUpdateOne = profile => ({
    type: PROFILE_UPDATE_ONE,
    profile,
})

const handleUpdateOneSuccess = profile => ({
    type: PROFILE_UPDATE_ONE_SUCCESS,
    profile,
})

const handleUpdateOneFailed = error => ({
    type: PROFILE_UPDATE_ONE_FAILED,
    error,
})

const handleGetOne = id => ({
    type: PROFILE_GET_ONE,
    id,
})

const handleGetOneSuccess = profile => ({
    type: PROFILE_GET_ONE_SUCCESS,
    profile,
})

const handleGetOneFailed = error => ({
    type: PROFILE_GET_ONE_FAILED,
    error,
})

const handleExport = file => ({
    type: PROFILE_EXPORT,
    file,
})

const handleExportSuccess = file => ({
    type: PROFILE_EXPORT_SUCCESS,
    file,
})

const handleExportFailed = error => ({
    type: PROFILE_EXPORT_FAILED,
    error,
})

const handleCreateOne = profile => ({
    type: PROFILE_CREATE_ONE,
    profile,
})

const handleCreateOneSuccess = profile => ({
    type: PROFILE_CREATE_ONE_SUCCESS,
    profile,
})

const handleCreateOneFailed = error => ({
    type: PROFILE_CREATE_ONE_FAILED,
    error,
})

const handleDeleteOne = id => ({
    type: PROFILE_DELETE_ONE,
    id,
})

const handleDeleteOneSuccess = id => ({
    type: PROFILE_DELETE_ONE_SUCCESS,
    id,
})

const handleDeleteOneFailed = error => ({
    type: PROFILE_DELETE_ONE_FAILED,
    error,
})

export const actions = {
    handleImport,
    handleImportSuccess,
    handleImportFailed,
    handleGetList,
    handleGetListSuccess,
    handleGetListFailed,
    handleUpdateOne,
    handleUpdateOneSuccess,
    handleUpdateOneFailed,
    handleGetOne,
    handleGetOneSuccess,
    handleGetOneFailed,
    handleExport,
    handleExportSuccess,
    handleExportFailed,
    handleCreateOne,
    handleCreateOneSuccess,
    handleCreateOneFailed,
    handleDeleteOne,
    handleDeleteOneSuccess,
    handleDeleteOneFailed,
}


const getFile = ({ profile }) => profile.file;

const getIsloading = ({ profile }) => profile.isLoading;

const getId = ({ profile }) => profile.id;

const getFilter = ({ profile }) => profile.filter;

const getListProfile = ({ profile }) => profile.list_profile;

const getProfile = ({ profile }) => profile.profile;

const getError = ({ profile }) => profile.error;

export const selectors = {
    getFile,
    getIsloading,
    getId,
    getFilter,
    getListProfile,
    getProfile,
    getError,
}

const initialState = {
    file: null,
    isLoading: false,
    id: null,
    filter: {},
    list_profile: [],
    profile: {},
    error: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case PROFILE_IMPORT: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_IMPORT_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            return newState;
        }
        case PROFILE_IMPORT_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case PROFILE_GET_LIST: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_GET_LIST_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            newState.list_profile = action.list_profile;
            return newState;
        }
        case PROFILE_GET_LIST_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case PROFILE_UPDATE_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_UPDATE_ONE_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            const { id } = action.profile;
            newState.list_profile = newState.list_profile.map(item => item.id == id ? action.profile : item);
            return newState;
        }
        case PROFILE_UPDATE_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case PROFILE_GET_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_GET_ONE_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            return newState;
        }
        case PROFILE_GET_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case PROFILE_EXPORT: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_EXPORT_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            return newState;
        }
        case PROFILE_EXPORT_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case PROFILE_CREATE_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_CREATE_ONE_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            const { profile } = action;
            newState.list_profile = [...state.list_profile, profile];
            return newState;
        }
        case PROFILE_CREATE_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case PROFILE_DELETE_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case PROFILE_DELETE_ONE_SUCCESS: {
            const newState = {...state}
            const { id } = action;
            newState.list_profile = newState.list_profile.filter(item => item.id !== action.id);
            newState.isLoading = false;
            return newState;
        }
        case PROFILE_DELETE_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        default:
            return state
    }
}
