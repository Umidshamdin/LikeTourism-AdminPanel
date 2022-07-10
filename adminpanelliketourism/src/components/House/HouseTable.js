import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../assets/sass/hotellisttable.scss";

import axios from "axios";
import { Link } from "react-router-dom";

function HouseTable() {
  let count = 0;

  const [hotel, setHotels] = useState([]);
 

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    debugger;
    const results = await axios.get(
      `https://localhost:44363/api/House/GetAll`
    );
    setHotels(results.data);
  };
  const deleteHotels = async (id) => {
    await axios.delete(`https://localhost:44363/api/House/Delete/${id}`);
    loadHotels();
  };
  const updateCities = async (id) => {
    console.log(id);
  };
  //   const updateCities = async id => {
  //    console.log(id);
  //   };

  return (
    <div className="tables">
      <Link to="/CreateHouse" className="btn btn-success btn-fw link">
        Create House
      </Link>
      <Link to="/FamousCityTable" className="btn btn-danger btn-fw link">
        Go To back
      </Link>


      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Prise</th>
            <th>Rating</th>
            <th>RatingCommit</th>
            <th>FamousCityId</th>
            <th>Setting</th>

           
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
                <div className="cityname">{hotels.name}</div>
              </td>
              <td>
                <div className="cityname">{hotels.prise}</div>
              </td>

              <td>
                <div className="cityname">{hotels.rating}</div>
              </td>


              <td>
                <div className="cityname">{hotels.ratingCommit}</div>
              </td>

              

              <td>
                <div className="cityname">{hotels.famousCityId}</div>
              </td>

              <td>
                <Link to={`/edithouse/${hotels.id}`}>
                  <button
                    onClick={() => updateCities(hotels.id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteHotels(hotels.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>

                <Link to={`/houserouter/${hotels.id}`}>
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

export default HouseTable;
