import React from 'react'
import './Rates.scss'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.jpg'

function Rates() {
  return (
    <div className='ratesWrapper'>
        <div className="header">
                <div className="hTittle">
                    <span>IMAGIX <br /> MEDIA</span>
                </div>
                <div className="socials">
                    <div className="links">
                        <a target="_blank" href="https://www.facebook.com/scola.imagix"><img src={facebook} alt="" srcset="" /></a>
                        <a target="_blank" href="https://instagram.com/imagixafrica?igshid=YmMyMTA2M2Y"><img src={instagram} alt="" srcset="" /></a>
                    </div>
                    <div className="phone">
                        <span>0702659667</span>
                    </div>
                </div>
        </div>
        <h2>Rates</h2>
    </div>
  )
}

export default Rates