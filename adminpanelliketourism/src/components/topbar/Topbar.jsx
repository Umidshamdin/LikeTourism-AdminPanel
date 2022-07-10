import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Swal from "sweetalert2";

export default function Topbar() {
  let token = localStorage.getItem("token");
  const [forrender, setForrender] = useState();
  function clearToken(e) {
    e.preventDefault();
    localStorage.clear();

    setForrender("");
    console.log(forrender);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Çıxış Etdiniz",
      showConfirmButton: false,
      timer: 1500,
    });

    window.location.assign(window.location.origin + "/login");
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LikeTourism</span>
        </div>
        <a href="/" className="nav-link">
          <button
            onClick={(e) => clearToken(e)}
            className="btn btn-outline-danger"
          >
            Logout
          </button>
        </a>
        {/* <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div> */}
      </div>
    </div>
  );
}
