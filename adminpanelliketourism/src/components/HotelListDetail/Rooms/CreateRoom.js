import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function CreateEvent() {
  const [img, setImg] = useState();
  const [roomType, setRoomType] = useState();
  const [roomPrise, setRoomPrise] = useState();
  const [remained, setRemained] = useState();

  const [hotelListId, setHotelListId] = useState();

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
        "https://localhost:44363/api/Reservation/Create",
        {
          Image: img,
          RoomType: roomType,
          RoomPrise: roomPrise,

          Remained: remained,

          HotelListId: hotelListId,
        },
        { "Content-Type": "multipart/form-data" }
      )

      .then(function (response) {
        Swal.fire(roomType, "Otaq əlavə edildi", "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",

          text: "Xəta baş verdi",
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
          <Form.Label>RoomType</Form.Label>
          <Form.Control
            type="text"
            placeholder="RoomType elave edin"
            onChange={(e) => setRoomType(e.target.value)}
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
          <Form.Label>RoomPrise</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setRoomPrise(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Remained</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setRemained(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>HotelListId</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setHotelListId(e.target.value)}
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
