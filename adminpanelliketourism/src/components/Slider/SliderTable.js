import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

import "../../assets/sass/slidertable.scss";
import axios from "axios";
import { Link } from "react-router-dom";
function SliderTable() {
  let count = 0;
  const [slider, setSliders] = useState([]);

  useEffect(() => {
    loadSliders();
  }, []);

  const loadSliders = async () => {
    const result = await axios.get("https://localhost:44363/api/Slider/GetAll");
    setSliders(result.data);
  };

  const deleteSliders = async (id) => {
    await axios.delete(`/api/Slider/Delete/${id}`);
    loadSliders();
  };

  const updateSliders = async id => {
   console.log(id);
  };



  return (
    <div className="tables">
      <Link to="/CreateSlider" className="btn btn-success btn-fw link">
        Create Slider
      </Link>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {slider.map((sliders) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${sliders.image}`}
                  alt=""
                />
              </td>
              <td>
                <div className="cityname">{sliders.title}</div>
              </td>
              <td>
                <div className="cityname">{sliders.desc}</div>
              </td>
              
            <td>
              <div className="buttons px-1">
                <Link to={`/updateslider/${sliders.id}`}>
                  <button
                    onClick={() => updateSliders(sliders.id)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteSliders(sliders.id)}
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

export default SliderTable;
