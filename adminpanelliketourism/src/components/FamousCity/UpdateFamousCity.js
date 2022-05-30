import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateEvent(props) {
  const { id } = useParams();
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [newname, setnewName] = useState();
  const [newimg, setnewImg] = useState();

  function initPromise() {
    const response = axios.get(`/api/Event/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `
        /api/FamousCity/Edit/${id}`,
        {
          Id: id,
          Name: newname,

          Image: newimg,
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

  useEffect(() => {
    initPromise()
      .then(function (result) {
        // "initResolve"
        return result.data;
      })
      .then(function (result) {
        setName(result.name); // "normalReturn"
        setImg(result.img);
      });
  });
  return (
    <div className="container">
      <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Event Name"
            onChange={(e) => setnewName(e.target.value)}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>BackGround Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => base64Img(e.target.files[0])}
            defaultValue={img}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateEvent;
