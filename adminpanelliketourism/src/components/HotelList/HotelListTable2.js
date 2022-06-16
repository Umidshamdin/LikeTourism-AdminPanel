import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../assets/sass/hotellisttable.scss";
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
      `https://localhost:44363/api/HotelList/GetAll/${id}`
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
            <th>Desc</th>
            <th>Rating</th>
            <th>RatingTitle</th>
            <th>Prise</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {hotel.map((hotelss) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                <div className="cityname">{hotelss.desc}</div>
              </td>

              <td>
                <div className="cityname">{hotelss.rating}</div>
              </td>
              <td>
                <div className="cityname">{hotelss.ratingTitle}</div>
              </td>

              <td>
                <div className="cityname">{hotelss.prise}</div>
              </td>

              <td>
                <Link to={`/hotellisttable2/${hotelss.id}`}>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-warning">Delete</button>

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
