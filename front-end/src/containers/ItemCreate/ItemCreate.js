import {connect} from "react-redux";

import
{
    actions as itemsActions,
    selectors as itemsSelectors
} from "../../reducers/items"

import ItemCreate from '../../components/ItemCreate'


const mapStateToProps = state => ({
    filter: itemsSelectors.getFilter(state),
    list_items: itemsSelectors.getListItems(state),
    error: itemsSelectors.getError(state),
    isLoading: itemsSelectors.getIsloading(state),
    file: itemsSelectors.getFile(state),
    id: itemsSelectors.getId(state),
    items: itemsSelectors.getItems(state),
});

const mapDispatchToProps = {
    handleDeleteOneFailed: itemsActions.handleDeleteOneFailed,
    handleGetList: itemsActions.handleGetList,
    handleGetOneFailed: itemsActions.handleGetOneFailed,
    handleExportFailed: itemsActions.handleExportFailed,
    handleUpdateOneSuccess: itemsActions.handleUpdateOneSuccess,
    handleExport: itemsActions.handleExport,
    handleExportSuccess: itemsActions.handleExportSuccess,
    handleDeleteOneSuccess: itemsActions.handleDeleteOneSuccess,
    handleImport: itemsActions.handleImport,
    handleGetListFailed: itemsActions.handleGetListFailed,
    handleImportFailed: itemsActions.handleImportFailed,
    handleCreateOneFailed: itemsActions.handleCreateOneFailed,
    handleGetListSuccess: itemsActions.handleGetListSuccess,
    handleImportSuccess: itemsActions.handleImportSuccess,
    handleDeleteOne: itemsActions.handleDeleteOne,
    handleCreateOne: itemsActions.handleCreateOne,
    handleCreateOneSuccess: itemsActions.handleCreateOneSuccess,
    handleUpdateOneFailed: itemsActions.handleUpdateOneFailed,
    handleGetOneSuccess: itemsActions.handleGetOneSuccess,
    handleGetOne: itemsActions.handleGetOne,
    handleUpdateOne: itemsActions.handleUpdateOne,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreate)
