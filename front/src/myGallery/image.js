import React from "react";
import Card from "react-bootstrap/Card";
import { storage } from "../Gallery/firebase";
import { ref, deleteObject } from "firebase/storage";
import Button from "react-bootstrap/Button";
function image({ image }) {
  const deleteImage = (image) => {
    const imageRef = ref(storage, image);
    console.log(imageRef);
    deleteObject(imageRef).then(() => {
      alert("Image has been deleted");
    });
  };
  return (
    <div>
      <Card className="container m-4" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "15rem", width: "17rem" }}
          src={image}
        />
        <Card.Body>
          <div>
            <Button
              variant="danger"
              className="m-2"
              onClick={() => {
                deleteImage(image);
              }}
            >
              Delete
            </Button>
            <Button variant="warning">Edit</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default image;
