import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../../assets/sass/hotellisttable.scss";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Link } from "react-router-dom";

function HotelListTable() {
  let count = 0;

  const [room, setRooms] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    debugger;
    const results = await axios.get(
      `https://localhost:44363/api/Reservation/GetAll/${id}`
    );
    setRooms(results.data);
  };
  const deleteRooms = async (id) => {
    await axios.delete(`/api/Reservation/Delete/${id}`);
    loadRooms();
  };

  const updateRooms = async (id) => {
    console.log(id);
  };

  return (
    <div className="tables">
      <Link to="/createroom" className="btn btn-success btn-fw link">
        Create Room
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
          {room.map((rooms) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${rooms.image}`}
                  alt=""
                />
              </td>
              <td>
                <div className="cityname">{rooms.roomType}</div>
              </td>
              <td>
                <div className="cityname">{rooms.roomPrise}</div>
              </td>

              <td>
                <div className="cityname">{rooms.remained}</div>
              </td>

              <td>
                <div className="cityname">{rooms.hotelListId}</div>
              </td>

              <td>
                <Link to={`/UptadeRooms/${rooms.id}`}>
                  <button
                    onClick={() => updateRooms(rooms.id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteRooms(rooms.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>

                <Link to={`/roomimages/${rooms.id}`}>
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
