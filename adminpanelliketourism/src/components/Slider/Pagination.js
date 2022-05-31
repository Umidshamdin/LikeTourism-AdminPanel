import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ sliderPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / sliderPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link
                onClick={() => paginate(number)}
                className="page-link"
                to={"#"}
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
