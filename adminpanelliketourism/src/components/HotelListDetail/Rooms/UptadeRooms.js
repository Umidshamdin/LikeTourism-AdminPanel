import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../assets/sass/updatefamouscity.scss";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function HotelListUpdate(props) {
  const { id } = useParams();

  const [img, setImg] = useState();
  const [roomType, setRoomType] = useState();
  const [roomPrise, setRoomPrise] = useState();
  const [remained, setRemained] = useState();

  const [newimg, setnewImg] = useState();
  const [newroomType, setnewRoomType] = useState();
  const [newroomPrise, setnewRoomPrise] = useState();
  const [newremained, setnewRemained] = useState();

  function initPromise() {
    const response = axios.get(`
    /api/Reservation/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `https://localhost:44363/api/Reservation/Edit/${id}`,
        {
          Id: id,
          RoomType: newroomType,
          Image: newimg,
          RoomPrise: newroomPrise,
          Remained: newremained,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire(newroomType, "Updated", "success");
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
        setRoomType(result.roomType); // "normalReturn"
        setImg(result.image);
        setRoomPrise(result.roomPrise);
        setRemained(result.remained);
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
          <Form.Label> RoomType</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Event Name"
            onChange={(e) => setnewRoomType(e.target.value)}
            defaultValue={roomType}
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
          <Form.Label>RoomPrise</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setnewRoomPrise(e.target.value)}
            defaultValue={roomPrise}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Remained</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setnewRemained(e.target.value)}
            defaultValue={remained}
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
