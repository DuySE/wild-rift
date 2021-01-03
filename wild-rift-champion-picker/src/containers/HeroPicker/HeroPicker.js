import { connect } from 'react-redux'
import HeroPicker from '../../components/HeroPicker'
import { actions as HeroesActions } from '../../reducers/heroes'

const mapDispatchToProps = {
  getHeroList: HeroesActions.getHeroList,
}

export default connect(null, mapDispatchToProps)(HeroPicker)
