import {connect} from "react-redux";

import
{
     actions as profileActions,
     selectors as profileSelectors
 } from "../reducers/profile"

import Profile from '../components/profile'

const mapStateToProps = state => ({
    file: profileSelectors.getFile(state),
    isLoading: profileSelectors.getIsloading(state),
    id: profileSelectors.getId(state),
    filter: profileSelectors.getFilter(state),
    list_profile: profileSelectors.getListProfile(state),
    profile: profileSelectors.getProfile(state),
    error: profileSelectors.getError(state),
});

const mapDispatchToProps = {
    handleCreateOneSuccess: profileActions.handleCreateOneSuccess,
    handleGetOneSuccess: profileActions.handleGetOneSuccess,
    handleUpdateOneSuccess: profileActions.handleUpdateOneSuccess,
    handleGetList: profileActions.handleGetList,
    handleExport: profileActions.handleExport,
    handleDeleteOne: profileActions.handleDeleteOne,
    handleImportSuccess: profileActions.handleImportSuccess,
    handleUpdateOne: profileActions.handleUpdateOne,
    handleImportFailed: profileActions.handleImportFailed,
    handleExportSuccess: profileActions.handleExportSuccess,
    handleCreateOne: profileActions.handleCreateOne,
    handleUpdateOneFailed: profileActions.handleUpdateOneFailed,
    handleExportFailed: profileActions.handleExportFailed,
    handleImport: profileActions.handleImport,
    handleGetListSuccess: profileActions.handleGetListSuccess,
    handleDeleteOneFailed: profileActions.handleDeleteOneFailed,
    handleGetListFailed: profileActions.handleGetListFailed,
    handleCreateOneFailed: profileActions.handleCreateOneFailed,
    handleDeleteOneSuccess: profileActions.handleDeleteOneSuccess,
    handleGetOneFailed: profileActions.handleGetOneFailed,
    handleGetOne: profileActions.handleGetOne,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
