export const HEROES_GET_LIST = 'heroes/GET_LIST'
export const HEROES_GET_LIST_SUCCESS = 'heroes/GET_LIST_SUCCESS'
export const HEROES_GET_LIST_FAILED = 'heroes/GET_LIST_FAILED'

// actions
const getHeroList = () => ({
  type: HEROES_GET_LIST,
})

const getHeroListSuccess = (heroList) => ({
  type: HEROES_GET_LIST_SUCCESS,
  heroList,
})

const getHeroListFailed = (errorMsg) => ({
  type: HEROES_GET_LIST_FAILED,
  errorMsg,
})

// =======================

export const actions = {
  getHeroList,
  getHeroListSuccess,
  getHeroListFailed,
}

// selectors

const selectHeroList = ({ heroes }) => heroes.heroList

// =======================

export const selectors = {
  selectHeroList,
}

// reducers

const initialState = {
  heroList: [],
  errorMsg: null,
  isLoadingHeroList: false,
}

export default function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case HEROES_GET_LIST: {
      return {
        ...state,
        isLoadingHeroList: true,
        errorMsg: null,
      }
    }

    case HEROES_GET_LIST_SUCCESS: {
      const { heroList } = action;
      return {
        ...state,
        heroList,
        isLoadingHeroList: false,
      }
    }

    case HEROES_GET_LIST_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        errorMsg,
        isLoadingHeroList: false,
      }
    }

    default: {
      return state
    }
  }
}
