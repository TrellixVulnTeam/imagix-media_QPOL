// Importing the necessary dependencies
import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import axios from 'axios'

//Import the needed images
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.jpg'
import image1 from '../Assets/img1.jpg'
import image2 from '../Assets/img2.jpg'
import image3 from '../Assets/img3.jpg'
import image4 from '../Assets/img4.jpg'
import image5 from '../Assets/img5.jpg'
import inputImg from '../Assets/image.png'

function Gallery() {

    const [file, setFile] = useState()
    const [filename, setFilename] = useState('')
    const [allImages, setAllImages] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/images/getimages").then((response)=>{
            setAllImages(response.data)
            
        })
      },[])
  

    const uploadImage = (e)=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('filename', filename)
        console.log(filename + file);


        axios.post(
            "http://localhost:4000/images/upload",
             formData
             )        
    }
  return (
    <div className='galleryWrapper'>
        <div className="header">
                <div className="hTittle">
                    <span>IMAGIX <br /> MEDIA</span>
                </div>
                <div className="socials">
                    <div className="links">
                        <a target="_blank" href="https://www.facebook.com/scola.imagix"><img src={facebook} alt=""/></a>
                        <a target="_blank" href="https://instagram.com/imagixafrica?igshid=YmMyMTA2M2Y"><img src={instagram} alt="" /></a>
                    </div>
                    <div className="phone">
                        <span>0702659667</span>
                    </div>
                </div>
            </div>
            <h2>Gallery</h2>
            <div className="images">
                {allImages.map((image)=>{
                    const Image = require(`../Assets/${image.imageName}`)
                    return(
                            <img src={Image} alt="" />
                        )
                })}

               
                
                {/* <img src={image1} alt=""/> */}
                {/* <img src={image2} alt=""/> */}
                {/* <img src={image3} alt=""/> */}
                {/* <img src={image4} alt=""/> */}
                {/* <img src={image5} alt=""/> */}
            </div>
            <div className="addLocation">
                <label htmlFor="inputField"><img src={inputImg} alt="" /></label>
                <input onChange={
                    (e)=>{ 
                        setFile(e.target.files[0])
                        setFilename(e.target.files[0].name)
                    }} 
                    type="file" 
                    id='inputField'
                />
                <button onClick={uploadImage}>Add Image</button>
            </div>
            <div className="login">
                <a href="">LOGIN</a>
            </div>
    </div>
  )
}

export default Gallery