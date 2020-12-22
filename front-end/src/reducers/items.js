export const ITEMS_GET_ONE = 'items/GET_ONE';
export const ITEMS_GET_ONE_SUCCESS = 'items/GET_ONE_SUCCESS';
export const ITEMS_GET_ONE_FAILED = 'items/GET_ONE_FAILED';
export const ITEMS_DELETE_ONE = 'items/DELETE_ONE';
export const ITEMS_DELETE_ONE_SUCCESS = 'items/DELETE_ONE_SUCCESS';
export const ITEMS_DELETE_ONE_FAILED = 'items/DELETE_ONE_FAILED';
export const ITEMS_IMPORT = 'items/IMPORT';
export const ITEMS_IMPORT_SUCCESS = 'items/IMPORT_SUCCESS';
export const ITEMS_IMPORT_FAILED = 'items/IMPORT_FAILED';
export const ITEMS_UPDATE_ONE = 'items/UPDATE_ONE';
export const ITEMS_UPDATE_ONE_SUCCESS = 'items/UPDATE_ONE_SUCCESS';
export const ITEMS_UPDATE_ONE_FAILED = 'items/UPDATE_ONE_FAILED';
export const ITEMS_CREATE_ONE = 'items/CREATE_ONE';
export const ITEMS_CREATE_ONE_SUCCESS = 'items/CREATE_ONE_SUCCESS';
export const ITEMS_CREATE_ONE_FAILED = 'items/CREATE_ONE_FAILED';
export const ITEMS_GET_LIST = 'items/GET_LIST';
export const ITEMS_GET_LIST_SUCCESS = 'items/GET_LIST_SUCCESS';
export const ITEMS_GET_LIST_FAILED = 'items/GET_LIST_FAILED';
export const ITEMS_EXPORT = 'items/EXPORT';
export const ITEMS_EXPORT_SUCCESS = 'items/EXPORT_SUCCESS';
export const ITEMS_EXPORT_FAILED = 'items/EXPORT_FAILED';

const handleGetOne = id => ({
    type: ITEMS_GET_ONE,
    id,
})

const handleGetOneSuccess = items => ({
    type: ITEMS_GET_ONE_SUCCESS,
    items,
})

const handleGetOneFailed = error => ({
    type: ITEMS_GET_ONE_FAILED,
    error,
})

const handleDeleteOne = id => ({
    type: ITEMS_DELETE_ONE,
    id,
})

const handleDeleteOneSuccess = id => ({
    type: ITEMS_DELETE_ONE_SUCCESS,
    id,
})

const handleDeleteOneFailed = error => ({
    type: ITEMS_DELETE_ONE_FAILED,
    error,
})

const handleImport = file => ({
    type: ITEMS_IMPORT,
    file,
})

const handleImportSuccess = file => ({
    type: ITEMS_IMPORT_SUCCESS,
    file,
})

const handleImportFailed = error => ({
    type: ITEMS_IMPORT_FAILED,
    error,
})

const handleUpdateOne = items => ({
    type: ITEMS_UPDATE_ONE,
    items,
})

const handleUpdateOneSuccess = items => ({
    type: ITEMS_UPDATE_ONE_SUCCESS,
    items,
})

const handleUpdateOneFailed = error => ({
    type: ITEMS_UPDATE_ONE_FAILED,
    error,
})

const handleCreateOne = items => ({
    type: ITEMS_CREATE_ONE,
    items,
})

const handleCreateOneSuccess = items => ({
    type: ITEMS_CREATE_ONE_SUCCESS,
    items,
})

const handleCreateOneFailed = error => ({
    type: ITEMS_CREATE_ONE_FAILED,
    error,
})

const handleGetList = list_items => ({
    type: ITEMS_GET_LIST,
    list_items,
})

const handleGetListSuccess = list_items => ({
    type: ITEMS_GET_LIST_SUCCESS,
    list_items,
})

const handleGetListFailed = error => ({
    type: ITEMS_GET_LIST_FAILED,
    error,
})

const handleExport = file => ({
    type: ITEMS_EXPORT,
    file,
})

const handleExportSuccess = file => ({
    type: ITEMS_EXPORT_SUCCESS,
    file,
})

const handleExportFailed = error => ({
    type: ITEMS_EXPORT_FAILED,
    error,
})

export const actions = {
    handleGetOne,
    handleGetOneSuccess,
    handleGetOneFailed,
    handleDeleteOne,
    handleDeleteOneSuccess,
    handleDeleteOneFailed,
    handleImport,
    handleImportSuccess,
    handleImportFailed,
    handleUpdateOne,
    handleUpdateOneSuccess,
    handleUpdateOneFailed,
    handleCreateOne,
    handleCreateOneSuccess,
    handleCreateOneFailed,
    handleGetList,
    handleGetListSuccess,
    handleGetListFailed,
    handleExport,
    handleExportSuccess,
    handleExportFailed,
}


const getFilter = ({ items }) => items.filter;

const getListItems = ({ items }) => items.list_items;

const getError = ({ items }) => items.error;

const getIsloading = ({ items }) => items.isLoading;

const getFile = ({ items }) => items.file;

const getId = ({ items }) => items.id;

const getItems = ({ items }) => items.items;

export const selectors = {
    getFilter,
    getListItems,
    getError,
    getIsloading,
    getFile,
    getId,
    getItems,
}

const initialState = {
    filter: {},
    list_items: [],
    error: {},
    isLoading: false,
    file: null,
    id: null,
    items: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ITEMS_GET_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_GET_ONE_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            return newState;
        }
        case ITEMS_GET_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case ITEMS_DELETE_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_DELETE_ONE_SUCCESS: {
            const newState = {...state}
            const { id } = action;
            newState.list_items = newState.list_items.filter(item => item.id !== action.id);
            newState.isLoading = false;
            return newState;
        }
        case ITEMS_DELETE_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case ITEMS_IMPORT: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_IMPORT_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            return newState;
        }
        case ITEMS_IMPORT_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case ITEMS_UPDATE_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_UPDATE_ONE_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            const { id } = action.items;
            newState.list_items = newState.list_items.map(item => item.id == id ? action.items : item);
            return newState;
        }
        case ITEMS_UPDATE_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case ITEMS_CREATE_ONE: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_CREATE_ONE_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            const { items } = action;
            newState.list_items = [...state.list_items, items];
            return newState;
        }
        case ITEMS_CREATE_ONE_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case ITEMS_GET_LIST: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_GET_LIST_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            newState.list_items = action.list_items;
            return newState;
        }
        case ITEMS_GET_LIST_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case ITEMS_EXPORT: {
            const newState = {...state}
            newState.isLoading = true;
            return newState;
        }
        case ITEMS_EXPORT_SUCCESS: {
            const newState = {...state}
            newState.isLoading = false;
            return newState;
        }
        case ITEMS_EXPORT_FAILED: {
            const newState = {...state}
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        default:
            return state
    }
}
