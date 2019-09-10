/* 3rd party */
import React from 'react'


export default function Place({ data, handlePlaceMouseEnter, handlePlaceMouseLeave, handlePlaceClick }) {
  const { name, address } = data
  const directions = `https://www.google.com/maps/dir/?api=1&origin=IDEO&destination=${name.split(' ').join('+')}&travelmode=walking`

  return (
    <a 
      onTouchStart={handlePlaceMouseEnter}
      onTouchCancel={handlePlaceMouseLeave}
      onMouseEnter={handlePlaceMouseEnter}
      onMouseLeave={handlePlaceMouseLeave}
      href={directions}
      target="_blank"
      className="_item-place sans-serif pl4 pt1 pb1 f7 db lh-copy underline-hover">
      <span className="_item-place-name">{name}</span>
      <span className="_item-place-address ml1">{address}</span>
    </a>
  )
}
