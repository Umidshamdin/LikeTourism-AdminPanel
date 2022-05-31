import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/sass/updateslider.scss";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateEvent(props) {
  const { id } = useParams();

  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const [newdesc, setnewDesc] = useState();

  const [newtitle, setnewTitle] = useState();
  const [newimg, setnewImg] = useState();


  function initPromise() {
    const response = axios.get(`/api/Slider/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `/api/Slider/Edit/${id}`,
        {
          Id: id,
          Title: newtitle,
          Desc: newdesc,
          Image: newimg,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire(newtitle, "Updated", "success");
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
        setTitle(result.title);
        setDesc(result.desc); // "normalReturn"

        // "normalReturn"
        setImg(result.image);
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
      <div className="images2">
        <img
          className="viewimg2 mb-3"
          src={`data:image/jpeg;base64,${img}`}
          alt=""
        />
      </div>
      <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setnewTitle(e.target.value)}
            defaultValue={title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter desc"
            onChange={(e) => setnewDesc(e.target.value)}
            defaultValue={desc}
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

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateEvent;
