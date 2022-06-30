// Importing the necessary dependencies
import React, { useEffect, useState } from 'react'
import './Gallery.scss'
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll} from 'firebase/storage'
import { v4 } from 'uuid'


//Import the needed images
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.jpg'
import inputImg from '../Assets/image.png'

function Gallery() {

    //create states for files and image urls
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([])

    const imagesListRef = ref(storage, 'imagix-media/')

    //Function to upload file on button click
    const uploadImage = ()=>{
        if (imageUpload == null) {
            console.log('Image not present. Try again');
            return;
        }else{
            const imageRef = ref(storage, `imagix-media/${imageUpload.name + v4()}`)
            uploadBytes(imageRef, imageUpload).then((snapshot)=>{
                alert("Image added")
                getDownloadURL(snapshot.ref).then((url)=>{
                    setImageUrls((prev)=>[...prev, url])
                })
            })
        }
    }


    useEffect(()=>{
        listAll(imagesListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageUrls((prev)=>[...prev, url])
                    console.log(imageUrls);
                })
            })
        })
    },[])

    
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
                {imageUrls.map((url)=>{
                    return(
                            <img src={url} alt="" />
                            // <h1>Hello imagae</h1>
                        )
                })}

               
                
            
            </div>
            <div className="addLocation">
                <label htmlFor="inputField"><img src={inputImg} alt="" /></label>
                <input onChange={
                    (event)=>{ 
                        setImageUpload(event.target.files[0]);
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