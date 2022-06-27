import React from 'react'
import './Gallery.scss'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.jpg'
import image1 from '../Assets/img1.jpg'
import image2 from '../Assets/img2.jpg'
import image3 from '../Assets/img3.jpg'
import image4 from '../Assets/img4.jpg'
import image5 from '../Assets/img5.jpg'
import inputImg from '../Assets/image.png'

function Gallery() {
  return (
    <div className='galleryWrapper'>
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
            <h2>Gallery</h2>
            <div className="images">
                <img src={image1} alt="" srcset="" />
                <img src={image2} alt="" srcset="" />
                <img src={image3} alt="" srcset="" />
                <img src={image4} alt="" srcset="" />
                <img src={image5} alt="" srcset="" />
            </div>
            <div className="addLocation">
                <label htmlFor="inputField"><img src={inputImg} alt="" /></label>
                <input type="file" id='inputField'/>
                <button>Add Image</button>
            </div>
            <div className="login">
                <a href="">LOGIN</a>
            </div>
    </div>
  )
}

export default Gallery