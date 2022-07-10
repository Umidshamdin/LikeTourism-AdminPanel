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
    
    const results = await axios.get(
      `https://localhost:44363/api/HotelDescription/GetAll/${id}`
    );
    setHotels(results.data);
  };
    const deleteCities = async (id) => {
      await axios.delete(`
      /api/HotelDescription/Delete/${id}`);
      loadHotels();
    };

    const updateCities = async id => {
     console.log(id);
    };

  return (
    <div className="tables">
      <Link to="/CreateHotelDescription" className="btn btn-success btn-fw link">
        Create Description
      </Link>
      <Link to="/FamousCityTable" className="btn btn-danger btn-fw link">
        Go To back
      </Link>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            <th>LongDesc</th>
            <th>Breakfast</th>
            <th>BreakfastTitle</th>
            <th>Parking</th>
            <th>Animal</th>
            <th>CheckIn</th>
            <th>HotelListId</th>



            
            <th>Settings</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {hotel.map((hotels) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                {hotels.longDesc.substring(0,20)}
              </td>
              <td>
                {hotels.breakfast}
              </td>
              <td>
                {hotels.breakfastType}
              </td>
              <td>
                {hotels.parking}
              </td>
              <td>
                {hotels.animal}
              </td>
              <td>
                {hotels.checkIn}
              </td>
              <td>
                {hotels.hotelListId}
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
                  <Link to={`/updatehoteldescription/${hotels.id}`}>
                    <button
                      onClick={() => updateCities(hotels.id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => deleteCities(hotels.id)}
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

export default HotelListTable;
