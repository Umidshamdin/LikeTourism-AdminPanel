import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/sass/updatefamouscity.scss";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditHouse(props) {
  const { id } = useParams();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [prise, setPrise] = useState();
  const [rating, setRating] = useState();
  const [ratingCommit, setRatingCommit] = useState();


  const [newname, setnewName] = useState();
  const [newimg, setnewImg] = useState();
  const [newprise, setnewPrise] = useState();
  
  const [newrating, setnewRating] = useState();
  const [newratingCommit, setnewRatingCommit] = useState();
 

  function initPromise() {
    const response = axios.get(`
    
    /api/House/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `/api/House/Edit/${id}`,
        {
          Id: id,
          Name: newname,
          Image: newimg,
          
          Rating:newrating,
          RatingCommit:newratingCommit,
          Prise:newprise

        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire(newname, "Updated", "success");
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
    initPromise()
      .then(function (result) {
        // "initResolve"
        return result.data;
      })
      .then(function (result) {
        setName(result.name); // "normalReturn"
        setImg(result.image);
        
        setRating(result.rating);
        setRatingCommit(result.ratingCommit);
        setPrise(result.prise);


      });
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
      setnewImg(result);
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
            onChange={(e) => setnewName(e.target.value)}
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
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setnewRating(e.target.value)}
            defaultValue={rating}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>RatingTitle</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setnewRatingCommit(e.target.value)}
            defaultValue={ratingCommit}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Prise</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setnewPrise(e.target.value)}
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

export default EditHouse;
