import { all, put, takeLeading } from 'redux-saga/effects'
import { HEROES_GET_LIST, actions as HeroesActions } from '../../reducers/heroes'
import * as HeroesServices from '../../services/heroesServices'

function* handleGetHeroList() {
  try {
    const heroList = HeroesServices.getHeroes()
    yield put(HeroesActions.getHeroListSuccess(heroList))
  } catch (error) {
    yield put(HeroesActions.getHeroListFailed(error.message))
  }
}

export default function* heroesSaga() {
  yield all([
    takeLeading(HEROES_GET_LIST, handleGetHeroList),
  ])
}
