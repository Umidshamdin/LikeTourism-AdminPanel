import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../assets/sass/famouscitytable.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function FamousCityTable() {
  let count = 0;

  const [city, setCities] = useState([]);

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    const results = await axios.get(
      "https://localhost:44363/api/FamousCity/GetAll"
    );
    setCities(results.data);
  };
  const deleteCities = async (id) => {
    await axios.delete(`/api/FamousCity/Delete/${id}`);
    loadCities();
  };

  return (
    <div className="tables">
      <Link to="/CreateFamousCity" className="btn btn-success btn-fw link">
        Create City
      </Link>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {city.map((citiess) => (
            <tr>
              <td className="tds">{++count}</td>

              <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${citiess.image}`}
                  alt=""
                />
              </td>
              <td>
                <div className="cityname">
                {citiess.name}
                </div>
              </td>

              <td>
                <div className="buttons px-1">
                  <button className="btn btn-primary">Edit</button>

                  <button
                    onClick={() => deleteCities(citiess.id)}
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

export default FamousCityTable;
