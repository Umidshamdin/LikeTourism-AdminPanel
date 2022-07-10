import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../assets/sass/famouscitytable.scss";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateHotelDescription(props) {
  const { id } = useParams();
  const [longDesc, setLongDesc] = useState();
  const [breakfast, setBreakfast] = useState();
  const [breakfastType, setBreakfastType] = useState();
  const [parking, setParking] = useState();
  const [animal, setAnimal] = useState();

  const [checkIn, setCheckIn] = useState();

  const [newLongDesc, setNewLongDesc] = useState();
  const [newBreakfast, setNewBreakfast] = useState();
  const [newBreakfastType, setNewBreakfastType] = useState();
  const [newParking, setNewParking] = useState();
  const [newAnimal, setNewAnimal] = useState();
  const [newCheckIn, setNewCheckIn] = useState();

  function initPromise() {
    const response = axios.get(`
    https://localhost:44363/api/HotelList/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `https://localhost:44363/api/HotelDescription/Edit/${id}`,
        {
          Id: id,
          LongDesc: newLongDesc,
          Breakfast: newBreakfast,
          BreakfastType: newBreakfastType,
          Parking: newParking,
          Animal: newAnimal,
          CheckIn: newCheckIn,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire("", "Updated", "success");
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
        setLongDesc(result.longDesc); // "normalReturn"
        setBreakfast(result.breakfast);
        setBreakfastType(result.breakfastType);
        setParking(result.parking);
        setAnimal(result.animal);
        setCheckIn(result.checkIn);
      });
  });

  return (
    <div className="container">
      <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> LongDesc</Form.Label>
          <Form.Control
            type="text"
            
            onChange={(e) => setNewLongDesc(e.target.value)}
            defaultValue={longDesc}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Breakfast</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNewBreakfast(e.target.value)}
            defaultValue={breakfast}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Breakfast Type</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNewBreakfastType(e.target.value)}
            defaultValue={breakfastType}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Parking</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNewParking(e.target.value)}
            defaultValue={parking}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Animal</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNewAnimal(e.target.value)}
            defaultValue={animal}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>CheckIn</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNewCheckIn(e.target.value)}
            defaultValue={checkIn}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateHotelDescription;
