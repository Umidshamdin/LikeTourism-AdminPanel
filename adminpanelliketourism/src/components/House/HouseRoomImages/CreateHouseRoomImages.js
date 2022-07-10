import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function CreateHouseRoomImages() {
  const [img, setImg] = useState();

  const [houseRoomId, setHouseRoomId] = useState();

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
    });
  }

  async function Create(e) {
    e.preventDefault();
    await axios
      .post(
        "https://localhost:44363/api/HouseRoomImages/Create",
        {
          
          Image: img,
         
          HouseRoomId: houseRoomId,
        },
        { "Content-Type": "multipart/form-data" }
      )

      .then(function (response) {
        Swal.fire("", "Created", "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setImg(result);
    });
  }

  return (
    <div className="container">
      <Form onSubmit={(e) => Create(e)}>
       

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => base64Img(e.target.files[0])}
          />
        </Form.Group>

     

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>HouseRoomId</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setHouseRoomId(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateHouseRoomImages;
