import React from 'react'
import HeroSlot from '../../containers/HeroSlot'
import { HeroSlotListWrapper, HeroFirstRow, HeroSecondRow } from './HeroSlotList.styled'

function HeroSlotList() {
  return (
    <HeroSlotListWrapper>
      <HeroFirstRow>
        <HeroSlot slotId={0} />
        <HeroSlot slotId={1} />
        <HeroSlot slotId={2} />
      </HeroFirstRow>
      <HeroSecondRow>
        <HeroSlot slotId={3} />
        <HeroSlot slotId={4} />
      </HeroSecondRow>
    </HeroSlotListWrapper>
  )
}

export default HeroSlotList
