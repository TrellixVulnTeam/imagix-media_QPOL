import React from 'react'
import './Rates.scss'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.jpg'
import { Link } from "react-router-dom"
import RateCard from './RateCard'

function Rates() {
  return (
    <div className='ratesWrapper'>
        <div className="header">
                <div className="hTittle">
                    <Link to='/'> <span>IMAGIX <br /> MEDIA</span> </Link> 
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
        <div className="rateCards">
            <RateCard title="PROFESSIONAL WEDDING PHOTOGRAPHY and VIDEOGRAPHY" imagesNo="Unlimited Number of Images" duration="Duration of The Whole Event" other="Images available for digital download" price="35-65" />
            <RateCard title="OUTDOOR PHOTOGRAPHY" imagesNo="10 Edited Images" duration="One Hour Photo Session" other="Session at Location of Your Choice Within Nairobi" price="3, 000" />
            <RateCard title="SHOOT FOR TWO" imagesNo="15 Edited Images" duration="Three Hours Photo Session" other="Images Available Digitally in Google Drive" price="5, 000" />
            <RateCard title="FAMILY PHOTO-SHOOT" imagesNo="15 Edited Images" duration="Four Hours Photo Session" other="Location of Your Choice Within Nairobi" price="3, 500" />
            <RateCard title="BABY BUMP / ENGAGEMENT" imagesNo="15 Edited Images" duration="Four Hours Photo Session" other="Free Three Clothing Change" price="7, 000" />
            <RateCard title="EVENTS" imagesNo="Full Event Coverage" duration="Five to Seven Hours Event Coverage" other="All Images Available for Digital Download Via Google Drive" price="15, 000" />
            <RateCard title="PRODUCT PHOTOGRAPHY" imagesNo="10 Edited Images" duration="Three Hours Photo Session" other="Freedom of Location Within Nairobi" price="2, 000" />
            
        </div>
    
        <div className="info">
            <h1>NOTE</h1>
            <p>Clients are expected to pay non- refundable deposit at least 2 days before the intended day of the shoot. <br /> For outdoor shots, the client is to provide the location and if be any expenses incurred for using the location will be on client. <br /> Kindly note that time allocated to you for your session is strict. Any additional time will be charged</p>
        </div>
    </div>
  )
}

export default Rates