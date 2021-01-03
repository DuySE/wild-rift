import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { ItemTypes } from '../../utils/enums'
import { HeroBox, HeroImg, HeroName, HeroSlotWrapper } from './Hero.styled'

function Hero({ hero }) {
  const [collectedProps, drag, preview] = useDrag({
    item: { id: 1, type: ItemTypes.HERO, data: hero }
  })

  return (
    <HeroSlotWrapper>
      {/* <DragPreviewImage src={hero.profile_image} connect={preview} /> */}
      <HeroBox ref={drag}>
        <HeroImg src={hero.profile_image} alt={hero.display_name} />
        <HeroName>{hero.display_name}</HeroName>
      </HeroBox>
    </HeroSlotWrapper>
  )
}

export default Hero
