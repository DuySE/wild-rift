import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import HeroList from '../../containers/HeroList'
import HeroSlotList from '../HeroSlotList'
import { HeroPickerWrapper } from './HeroPicker.styled'

function HeroPicker({ getHeroList }) {
  useEffect(() => {
    getHeroList()
  }, [])

  return (
    <HeroPickerWrapper>
      <HeroList />
      <HeroSlotList />
    </HeroPickerWrapper>
  )
}

HeroPicker.propTypes = {
  getHeroList: PropTypes.func.isRequired,
}

export default HeroPicker
