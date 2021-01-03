import { connect } from 'react-redux'
import HeroList from '../../components/HeroList'
import { selectors as HeroesSelectors } from '../../reducers/heroes'

const mapStateToProps = (state) => ({
  heroList: HeroesSelectors.selectHeroList(state),
})

export default connect(mapStateToProps)(HeroList)
