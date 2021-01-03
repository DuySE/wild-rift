import React from 'react'
import Hero from '../Hero'

function HeroList({ heroList }) {
  if (!heroList || !heroList.length) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      {heroList.map(hero => (<Hero hero={hero} key={hero._id} />))}
    </div>
  )
}

export default HeroList
