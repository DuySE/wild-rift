import { connect } from 'react-redux'
import HeroSlot from '../../components/HeroSlot'
import { actions as HeroSlotsActions, selectors as HeroSlotsSelectors } from '../../reducers/heroSlots'

const mapStateToProps = (state, { slotId }) => ({
  hero: HeroSlotsSelectors.selectHeroBySlot(state, slotId),
})

const mapDispatchToProps = {
  setHero: HeroSlotsActions.setHero,
  removeHero: HeroSlotsActions.removeHero,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroSlot)
