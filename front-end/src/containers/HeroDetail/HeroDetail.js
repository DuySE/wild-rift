import {connect} from "react-redux";

import
{
    actions as heroesActions,
    selectors as heroesSelectors
} from "../../reducers/heroes"

import HeroDetail from '../../components/HeroDetail'


const mapStateToProps = state => ({
    file: heroesSelectors.getFile(state),
    isLoading: heroesSelectors.getIsloading(state),
    id: heroesSelectors.getId(state),
    list_heroes: heroesSelectors.getListHeroes(state),
    filter: heroesSelectors.getFilter(state),
    heroes: heroesSelectors.getHeroes(state),
    error: heroesSelectors.getError(state),
});

const mapDispatchToProps = {
    handleCreateOneSuccess: heroesActions.handleCreateOneSuccess,
    handleGetOneSuccess: heroesActions.handleGetOneSuccess,
    handleUpdateOneSuccess: heroesActions.handleUpdateOneSuccess,
    handleGetList: heroesActions.handleGetList,
    handleExport: heroesActions.handleExport,
    handleDeleteOne: heroesActions.handleDeleteOne,
    handleImportSuccess: heroesActions.handleImportSuccess,
    handleUpdateOne: heroesActions.handleUpdateOne,
    handleImportFailed: heroesActions.handleImportFailed,
    handleExportSuccess: heroesActions.handleExportSuccess,
    handleCreateOne: heroesActions.handleCreateOne,
    handleUpdateOneFailed: heroesActions.handleUpdateOneFailed,
    handleExportFailed: heroesActions.handleExportFailed,
    handleImport: heroesActions.handleImport,
    handleGetListSuccess: heroesActions.handleGetListSuccess,
    handleDeleteOneFailed: heroesActions.handleDeleteOneFailed,
    handleGetListFailed: heroesActions.handleGetListFailed,
    handleCreateOneFailed: heroesActions.handleCreateOneFailed,
    handleDeleteOneSuccess: heroesActions.handleDeleteOneSuccess,
    handleGetOneFailed: heroesActions.handleGetOneFailed,
    handleGetOne: heroesActions.handleGetOne,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail)
