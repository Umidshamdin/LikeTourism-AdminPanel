import React from "react";
import { Link, useParams } from "react-router-dom";

function HouseRouter() {
  const { id } = useParams();

  return (
    <div>
      <Link to={`/houseimagestable/${id}`}>
        <button className="btn btn-primary">HouseIamges</button>
      </Link>

      <Link to={`/houseroomstable/${id}`}>
        <button className="btn btn-primary">HouseRooms</button>
      </Link>
    </div>
  );
}

export default HouseRouter;
