import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../../assets/sass/hotellisttable.scss";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Link } from "react-router-dom";

function HotelListTable() {
  let count = 0;

  const [hotel, setHotels] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    debugger;
    const results = await axios.get(
      `https://localhost:44363/api/Reservation/GetAll/${id}`
    );
    setHotels(results.data);
  };
  //   const deleteCities = async (id) => {
  //     await axios.delete(`/api/FamousCity/Delete/${id}`);
  //     loadCities();
  //   };

  //   const updateCities = async id => {
  //    console.log(id);
  //   };

  return (
    <div className="tables">
      <Link to="/HotelCreate" className="btn btn-success btn-fw link">
        Create Hotel
      </Link>
      <Link to="/FamousCityTable" className="btn btn-danger btn-fw link">
        Go To back
      </Link>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            <th>Image</th>
            <th>RoomType</th>
            <th>RoomPrise</th>
            <th>Remained</th>

            <th>HotelListId</th>
            <th>Settings</th>


           
          </tr>
        </thead>
        <tbody className="tbodies">
          {hotel.map((hotels) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${hotels.image}`}
                  alt=""
                />
              </td>
              <td>
                <div className="cityname">{hotels.roomType}</div>
              </td>
              <td>
                <div className="cityname">{hotels.roomPrise}</div>
              </td>

              <td>
                <div className="cityname">{hotels.remained}</div>
              </td>

              <td>
                <div className="cityname">{hotels.hotelListId}</div>
              </td>

              

              <td>
                <Link to={"/"}>
                  <button className="btn btn-warning">Edit</button>
                </Link>

                <Link to={"/"}>
                  <button className="btn btn-danger">Delete</button>
                </Link>

                <Link to={`/hotelrouter/${hotels.id}`}>
                  <button className="btn btn-primary">Detail</button>
                </Link>
              </td>
              {/* 
              <td>
                <div className="buttons px-1">
                  <Link to={`/updatefamouscity/${hotels.id}`}>
                    <button
                      onClick={() => updateCities(citiess.id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => deleteCities(citiess.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HotelListTable;
