/* 3rd party */
import React, { useState } from 'react'
import classNames from 'classnames'

/* 1st party */
import Place from './Place'
import ExpandableHeader from './ExpandableHeader'

export default function PlaceCategory({ 
  data, onPlaceCategoryHeaderClick, handleActivePlaceIdChange, isExpanded 
}) {
  const { color, name, places } = data
  
  return (
    <article className={classNames('_article-expandable', { '_expanded' : isExpanded })}>
      
      <ExpandableHeader
        color={color}
        handleClick={onPlaceCategoryHeaderClick}
        title={name} />
      
      {isExpanded &&
        <section className="_section-places-list">
          {places.map((place, index) => (
            <Place
              key={index}
              data={place} 
              handlePlaceMouseEnter={handleActivePlaceIdChange.bind(null, place.id)}
              handlePlaceMouseLeave={handleActivePlaceIdChange.bind(null, null)}
              handlePlaceClick={() => { console.log('mouse place click') }}
            />
          ))}
        </section>
      }
      
    </article>
  )
}