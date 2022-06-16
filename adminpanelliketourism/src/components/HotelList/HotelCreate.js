import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function CreateEvent() {
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [distance, setDistance] = useState();
  const [rating, setRating] = useState();
  const [ratingTitle, setRatingTitle] = useState();

  const [desc, setDesc] = useState();
  const [star, setStar] = useState();
  const [famousCityId, setFamousCityId] = useState();


  const [prise, setPrise] = useState();
  


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
        "https://localhost:44363/api/HotelList/Create",
        {
          Name: name,
          Image: img,
          Rating:rating,
          RatingTitle:ratingTitle,

          Desc:desc,
          Star:star,

          Distance:distance,
          Prise:prise,
          FamousCityId:famousCityId

        },
        { "Content-Type": "multipart/form-data" }
      )

      .then(function (response) {
        Swal.fire(name, "Created", "success");
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=" city Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => base64Img(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Distance</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDistance(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Rating Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setRatingTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Desc</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Star</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setStar(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPrise(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>FamousCityId</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setFamousCityId(e.target.value)}
          />
        </Form.Group>

    

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateEvent;
