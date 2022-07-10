import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../../assets/sass/hotellisttable.scss";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Link } from "react-router-dom";

function HouseImagesTable() {
  let count = 0;

  const [roomImage, setRoomImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    const results = await axios.get(
      `
      https://localhost:44363/api/HouseImages/GetAll/${id}`
    );
    setRoomImages(results.data);
  };
    const deleteRoomImages = async (id) => {
      await axios.delete(`
      https://localhost:44363/api/HouseImages/Delete/${id}`);
      loadHotels();
    };

    // const updateCities = async id => {
    //  console.log(id);
    // };

  return (
    <div className="tables">
      <Link to="/createhouseimages" className="btn btn-success btn-fw link">
        Create Hotel Images
      </Link>
      <Link to="/HotelRouter/:id" className="btn btn-danger btn-fw link">
        Go To Detail
      </Link>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            <th>Image</th>

            <th>HouseId</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {roomImage.map((roomimg) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${roomimg.image}`}
                  alt=""
                />
              </td>
              <td>

                {roomimg.houseId}
              </td>
             

              {/* <td>
                <Link to={`/hotellisttable2/${hotels.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>

                <Link to={"/"}>
                  <button className="btn btn-danger">Delete</button>
                </Link>

                <Link to={"/"}>
                  <button className="btn btn-primary">Detail</button>
                </Link>
              </td> */}
              
              <td>
                <div className="buttons px-1">
                 

                  <button
                    onClick={() => deleteRoomImages(roomimg.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HouseImagesTable;
