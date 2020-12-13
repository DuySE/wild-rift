export const HEROES_IMPORT = 'heroes/IMPORT';
export const HEROES_IMPORT_SUCCESS = 'heroes/IMPORT_SUCCESS';
export const HEROES_IMPORT_FAILED = 'heroes/IMPORT_FAILED';
export const HEROES_GET_LIST = 'heroes/GET_LIST';
export const HEROES_GET_LIST_SUCCESS = 'heroes/GET_LIST_SUCCESS';
export const HEROES_GET_LIST_FAILED = 'heroes/GET_LIST_FAILED';
export const HEROES_UPDATE_ONE = 'heroes/UPDATE_ONE';
export const HEROES_UPDATE_ONE_SUCCESS = 'heroes/UPDATE_ONE_SUCCESS';
export const HEROES_UPDATE_ONE_FAILED = 'heroes/UPDATE_ONE_FAILED';
export const HEROES_GET_ONE = 'heroes/GET_ONE';
export const HEROES_GET_ONE_SUCCESS = 'heroes/GET_ONE_SUCCESS';
export const HEROES_GET_ONE_FAILED = 'heroes/GET_ONE_FAILED';
export const HEROES_EXPORT = 'heroes/EXPORT';
export const HEROES_EXPORT_SUCCESS = 'heroes/EXPORT_SUCCESS';
export const HEROES_EXPORT_FAILED = 'heroes/EXPORT_FAILED';
export const HEROES_CREATE_ONE = 'heroes/CREATE_ONE';
export const HEROES_CREATE_ONE_SUCCESS = 'heroes/CREATE_ONE_SUCCESS';
export const HEROES_CREATE_ONE_FAILED = 'heroes/CREATE_ONE_FAILED';
export const HEROES_DELETE_ONE = 'heroes/DELETE_ONE';
export const HEROES_DELETE_ONE_SUCCESS = 'heroes/DELETE_ONE_SUCCESS';
export const HEROES_DELETE_ONE_FAILED = 'heroes/DELETE_ONE_FAILED';

const handleImport = file => ({
    type: HEROES_IMPORT,
    file,
});

const handleImportSuccess = file => ({
    type: HEROES_IMPORT_SUCCESS,
    file,
});

const handleImportFailed = error => ({
    type: HEROES_IMPORT_FAILED,
    error,
});

const handleGetList = list_heroes => ({
    type: HEROES_GET_LIST,
    list_heroes,
});

const handleGetListSuccess = list_heroes => ({
    type: HEROES_GET_LIST_SUCCESS,
    list_heroes,
});

const handleGetListFailed = error => ({
    type: HEROES_GET_LIST_FAILED,
    error,
});

const handleUpdateOne = heroes => ({
    type: HEROES_UPDATE_ONE,
    heroes,
});

const handleUpdateOneSuccess = heroes => ({
    type: HEROES_UPDATE_ONE_SUCCESS,
    heroes,
});

const handleUpdateOneFailed = error => ({
    type: HEROES_UPDATE_ONE_FAILED,
    error,
});

const handleGetOne = id => ({
    type: HEROES_GET_ONE,
    id,
});

const handleGetOneSuccess = heroes => ({
    type: HEROES_GET_ONE_SUCCESS,
    heroes,
});

const handleGetOneFailed = error => ({
    type: HEROES_GET_ONE_FAILED,
    error,
});

const handleExport = file => ({
    type: HEROES_EXPORT,
    file,
});

const handleExportSuccess = file => ({
    type: HEROES_EXPORT_SUCCESS,
    file,
});

const handleExportFailed = error => ({
    type: HEROES_EXPORT_FAILED,
    error,
});

const handleCreateOne = heroes => ({
    type: HEROES_CREATE_ONE,
    heroes,
});

const handleCreateOneSuccess = heroes => ({
    type: HEROES_CREATE_ONE_SUCCESS,
    heroes,
});

const handleCreateOneFailed = error => ({
    type: HEROES_CREATE_ONE_FAILED,
    error,
});

const handleDeleteOne = id => ({
    type: HEROES_DELETE_ONE,
    id,
});

const handleDeleteOneSuccess = id => ({
    type: HEROES_DELETE_ONE_SUCCESS,
    id,
});

const handleDeleteOneFailed = error => ({
    type: HEROES_DELETE_ONE_FAILED,
    error,
});

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
};


const getFile = ({ heroes }) => heroes.file;

const getIsloading = ({ heroes }) => heroes.isLoading;

const getId = ({ heroes }) => heroes.id;

const getListHeroes = ({ heroes }) => heroes.list_heroes;

const getFilter = ({ heroes }) => heroes.filter;

const getHeroes = ({ heroes }) => heroes.heroes;

const getError = ({ heroes }) => heroes.error;

export const selectors = {
    getFile,
    getIsloading,
    getId,
    getListHeroes,
    getFilter,
    getHeroes,
    getError,
};

const initialState = {
    file: null,
    isLoading: false,
    id: null,
    list_heroes: [],
    filter: {},
    heroes: {},
    error: {},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case HEROES_IMPORT: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_IMPORT_SUCCESS: {
            const newState = {...state};
            newState.isLoading = false;
            return newState;
        }
        case HEROES_IMPORT_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case HEROES_GET_LIST: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_GET_LIST_SUCCESS: {
            const newState = {...state};
            newState.isLoading = false;
            newState.list_heroes = action.list_heroes;
            return newState;
        }
        case HEROES_GET_LIST_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case HEROES_UPDATE_ONE: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_UPDATE_ONE_SUCCESS: {
            const newState = {...state};
            newState.isLoading = false;
            const { id } = action.heroes;
            newState.list_heroes = newState.list_heroes.map(item => item.id == id ? action.heroes : item);
            return newState;
        }
        case HEROES_UPDATE_ONE_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case HEROES_GET_ONE: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_GET_ONE_SUCCESS: {
            const newState = {...state};
            newState.heroes = action.heroes;
            newState.isLoading = false;
            return newState;
        }
        case HEROES_GET_ONE_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case HEROES_EXPORT: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_EXPORT_SUCCESS: {
            const newState = {...state};
            newState.isLoading = false;
            return newState;
        }
        case HEROES_EXPORT_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case HEROES_CREATE_ONE: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_CREATE_ONE_SUCCESS: {
            const newState = {...state};
            newState.isLoading = false;
            const { heroes } = action;
            newState.list_heroes = [...state.list_heroes, heroes];
            return newState;
        }
        case HEROES_CREATE_ONE_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        case HEROES_DELETE_ONE: {
            const newState = {...state};
            newState.isLoading = true;
            return newState;
        }
        case HEROES_DELETE_ONE_SUCCESS: {
            const newState = {...state};
            const { id } = action;
            newState.list_heroes = newState.list_heroes.filter(item => item.id !== action.id);
            newState.isLoading = false;
            return newState;
        }
        case HEROES_DELETE_ONE_FAILED: {
            const newState = {...state};
            newState.isLoading = false;
            newState.error = action.error;
            return newState;
        }
        default:
            return state
    }
}
