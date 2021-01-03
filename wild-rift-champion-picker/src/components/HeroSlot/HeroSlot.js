import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/enums'
import { HeroSlotWrapper, HeroName, HeroDropGuide } from './HeroSlot.styled'

function HeroSlot({ slotId, hero, setHero }) {
  const [collectedProps, drop] = useDrop({
    accept: ItemTypes.HERO,
    drop: (item) => setHero(slotId, item.data),
  })

  if (!hero) {
    return (
      <HeroSlotWrapper ref={drop}>
        <HeroDropGuide>
          Drop here
        </HeroDropGuide>
      </HeroSlotWrapper>
    )
  }

  return (
    <HeroSlotWrapper
      ref={drop}
      img={hero.profile_image}
    >
      <HeroName>
        {hero.display_name}
      </HeroName>
    </HeroSlotWrapper>
  )
}

export default HeroSlot
