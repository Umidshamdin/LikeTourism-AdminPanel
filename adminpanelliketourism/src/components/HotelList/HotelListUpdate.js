import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/sass/updatefamouscity.scss";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function HotelListUpdate(props) {
  const { id } = useParams();
  const [name, setName] = useState(null);
  const [img, setImg] = useState();
  const [distance, setDistance] = useState();
  const [star, setStar] = useState();
  const [desc, setDesc] = useState();
  const [rating, setRating] = useState();
  const [ratingTitle, setRatingTitle] = useState();
  const [prise, setPrise] = useState();


  
  function initPromise() {
    const response = axios.get(`
    /api/HotelList/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `/api/HotelList/Edit/${id}`,
        {
          Id: id,
          Name: name,
          Image: img,
          Distance:distance,
          Star:star,
          Desc:desc,
          Rating:rating,
          RatingTitle:ratingTitle,
          Prise:prise

        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire(name, "Updated", "success");
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

  useEffect(() => {
    if(name == null) {
      initPromise()
      .then(function (result) {
        // "initResolve"
        return result.data;
      })
      .then(function (result) {
        setName(result.name); // "normalReturn"
        setImg(result.image);
        setDistance(result.distance);
        setStar(result.star);
        setDesc(result.desc);
        setRating(result.rating);
        setRatingTitle(result.ratingTitle);
        setPrise(result.prise);
      });
    }
  });

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
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
      <div className="images">
        <img
          className="viewimg mb-3"
          src={`data:image/jpeg;base64,${img}`}
          alt=""
        />
      </div>
      <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Event Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => base64Img(e.target.files[0])}
            defaultValue={img}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Distance</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDistance(e.target.value)}
            defaultValue={distance}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Star</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setStar(e.target.value)}
            defaultValue={star}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Desc</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            defaultValue={desc}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setRating(e.target.value)}
            defaultValue={rating}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>RatingTitle</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setRatingTitle(e.target.value)}
            defaultValue={ratingTitle}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Prise</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setPrise(e.target.value)}
            defaultValue={prise}
          />
        </Form.Group>


        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default HotelListUpdate;
