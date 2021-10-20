import React from 'react'

function Hero({heroName}) {
  if (heroName.toLowerCase() === 'joker') {
    throw new Error('No Hero');
  }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
