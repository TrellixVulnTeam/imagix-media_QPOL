import React, { useEffect, useState } from "react";
import "./myGallery.scss";
import Image from "./image";
import { storage } from "../Gallery/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import inputImg from "../Assets/image.png";

function My_gallery() {
  //create states for files and image urls
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "imagix-media/");
  const [images_paths, set_images_paths] = useState([]);

  //Function to upload file on button click
  const uploadImage = () => {
    if (imageUpload == null) {
      return;
    } else {
      const imageRef = ref(storage, `imagix-media/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        alert("Image added");
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    }
  };
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          set_images_paths((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="container-fluid">
      <Container className="navbar navbar-dark bg-dark">
        <Navbar.Brand>Imagix Media</Navbar.Brand>
      </Container>
      <div className="images">
        {images_paths.map((url) => {
          return <Image image={url} />;
        })}
      </div>
      <div className="addLocation">
        <label htmlFor="inputField">
          <img src={inputImg} alt="" />
        </label>
        <input
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
          type="file"
          id="inputField"
        />
        <button onClick={uploadImage}>Add Image</button>
        <button onClick={uploadImage}>Add Image</button>
      </div>
    </div>
  );
}

export default My_gallery;
