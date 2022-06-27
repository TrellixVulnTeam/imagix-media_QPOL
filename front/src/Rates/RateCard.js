import React from 'react'
import './RateCard.scss'

function RateCard({ title, imagesNo, duration, other, price }) {
  return (
    <div className='rateCardWrapper'>
        <h1>{ title }</h1>
        <h3>{ imagesNo }</h3>
        <p>{ duration }</p>
        <p>{ other }</p>
        <h2> Ksh. { price } /=</h2>
    </div>
  )
}

export default RateCard