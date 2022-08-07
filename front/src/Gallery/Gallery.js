// Importing the necessary dependencies
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";
import { storage } from "./firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";

//Import the needed images
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.jpg";

function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "imagix-media/");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="galleryWrapper">
      <div className="header">
        <div className="hTittle">
          <Link to="/">
            {" "}
            <span>
              IMAGIX <br /> MEDIA
            </span>{" "}
          </Link>
        </div>
        <div className="socials">
          <div className="links">
            <a target="_blank" href="https://www.facebook.com/scola.imagix">
              <img src={facebook} alt="" />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/imagixafrica?igshid=YmMyMTA2M2Y"
            >
              <img src={instagram} alt="" />
            </a>
          </div>
          <div className="phone">
            <span>0702659667</span>
          </div>
        </div>
      </div>
      <h2>Gallery</h2>
      <div className="images">
        {imageUrls.map((url) => {
          return <img src={url} alt="" />;
        })}
      </div>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Gallery;
