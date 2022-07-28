import React, { useEffect, useState } from "react";
import "./myGallery.scss";
import Image from "./image";
import { storage } from "../Gallery/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function My_gallery() {
  const imagesListRef = ref(storage, "imagix-media/");
  const [images_paths, set_images_paths] = useState([]);

  useEffect(() => {
    console.log("I logged");
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
    </div>
  );
}

export default My_gallery;
