import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function CreateHotelDescription() {
  const [longDesc, setLongDesc] = useState();
  const [breakfast, setBreakfast] = useState();
  const [breakfastType, setBreakfastType] = useState();
  const [parking, setParking] = useState();
  const [animal, setAnimal] = useState();
  const [checkIn, setCheckIn] = useState();
  const [hotelListId, setHotelListId] = useState();

  async function Create(e) {
    e.preventDefault();
    await axios
      .post(
        "https://localhost:44363/api/HotelDescription/Create",
        {
          LongDesc: longDesc,
          Breakfast: breakfast,
          BreakfastType: breakfastType,
          Parking: parking,
          Animal: animal,
          CheckIn: checkIn,
          HotelListId: hotelListId
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

  return (
    <div className="container">
      <Form onSubmit={(e) => Create(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>LongDesc</Form.Label>
          <Form.Control
            type="text"
            placeholder=" city Name"
            onChange={(e) => setLongDesc(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Breakfast</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setBreakfast(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>BreakfastType</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setBreakfastType(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Parking</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setParking(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Animal</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setAnimal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>CheckIn</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setCheckIn(e.target.value)}
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

export default CreateHotelDescription;
