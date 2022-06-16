import React from "react";
import { Link, useParams } from "react-router-dom";

function HotelRouter() {
    const { id } = useParams();

  return (
    <div>

      <Link to={`/hotelImagesTable/${id}`}>
        <button className="btn btn-primary">Hotelimages</button>
      </Link>

      <Link to={`/hoteldescription/${id}`}>
        <button className="btn btn-primary">HotelDescription</button>
      </Link>

      <Link to={`/roomlisttable/${id}`}>
        <button className="btn btn-primary">Rooms</button>
      </Link>
    </div>
  );
}

export default HotelRouter;
