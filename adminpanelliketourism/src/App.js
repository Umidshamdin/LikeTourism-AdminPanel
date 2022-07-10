import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FamousCityTable from "./components/FamousCity/FamousCityTable";
import CreateFamousCity from "./components/FamousCity/CreateFamousCity";
import UpdateFamousCity from "./components/FamousCity/UpdateFamousCity";
import SliderTable from "./components/Slider/SliderTable";
import CreateSlider from "./components/Slider/CreateSlider";
import UpdateSlider from "./components/Slider/UpdateSlider";
import { Pagination } from "react-bootstrap";
import HotelListTable from "./components/HotelList/HotelListTable";
import HotelImagesTable from "./components/HotelListDetail/HotelImages/HotelImagesTable";
// import HotelListTable2 from "./components/HotelList/HotelListTable2";

import HotelCreate from "./components/HotelList/HotelCreate";
import HotelRouter from "./components/HotelListDetail/HotelRouter";
import HotelDescription from "./components/HotelListDetail/HotelDescription/HotelDescription";
import RoomListTable from "./components/HotelListDetail/Rooms/RoomListTable";
import HotelListUpdate from "./components/HotelList/HotelListUpdate";
import CreateHotelImages from "./components/HotelListDetail/HotelImages/CreateHotelImages";
import UpdateHotelImages from "./components/HotelListDetail/HotelImages/UpdateHotelImages";
import CreateHotelDescription from "./components/HotelListDetail/HotelDescription/CreateHotelDescription";
import UpdateHotelDescription from "./components/HotelListDetail/HotelDescription/UpdateHotelDescription";
import CreateRoom from "./components/HotelListDetail/Rooms/CreateRoom";
import RoomImages from "./components/HotelListDetail/Rooms/RoomDetail/RoomImages";
import CreateRoomImages from "./components/HotelListDetail/Rooms/RoomDetail/CreateRoomImages";
import UptadeRooms from "./components/HotelListDetail/Rooms/UptadeRooms";
import HouseTable from "./components/House/HouseTable";
import CreateHouse from "./components/House/CreateHouse";
import EditHouse from "./components/House/EditHouse";
import HouseImagesTable from "./components/House/HouseImages/HouseImagesTable";
import HouseRouter from "./components/House/HouseRouter";
import HouseRoomsTable from "./components/House/HouseRooms/HouseRoomsTable";
import CreateHouseRooms from "./components/House/HouseRooms/CreateHouseRooms";
import HouseRoomsEdit from "./components/House/HouseRooms/HouseRoomsEdit";
import CreateHouseImages from "./components/House/HouseImages/CreateHouseImages";
import HouseRoomImagesTable from "./components/House/HouseRoomImages/HouseRoomImagesTable";
import CreateHouseRoomImages from "./components/House/HouseRoomImages/CreateHouseRoomImages";
import Protection from "./components/Protection";
import Login from "./components/Account/Login";

function App() {
  let [user, setUser] = useState("");
  let currentToken = localStorage.getItem("token");
  let currentUser;
  function parseJwt(token) {
    if (token.length > 50) {
      var base64Url = token.split(".")[1];
    }
    if (base64Url !== undefined) {
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    }
    return JSON.parse(jsonPayload);
  }
  let userdet;
  if (currentToken != null) {
    userdet =
      parseJwt(currentToken)[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];
  }

  if (userdet === "SuperAdmin" || userdet === "Admin") {
    currentUser = currentToken;
    console.log(user);
  }

  return (
    <Router>
      {localStorage.getItem("token") === currentUser &&
      currentToken.length > 100 ? (
        <Topbar />
      ) : (
        ""
      )}

      <div className="main">
        {localStorage.getItem("token") === currentUser &&
        currentToken.length > 100 ? (
          <Sidebar />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/login" element={<Login user={setUser} />} />
          <Route path="/" element={<Login user={setUser} />} />
          <Route element={<Protection />}>
            <Route path="/famouscitytable/" element={<FamousCityTable />} />
            <Route path="/housetable" element={<HouseTable />} />
            <Route path="/createhouse" element={<CreateHouse />} />
            <Route path="/edithouse/:id" element={<EditHouse />} />C
            <Route path="/CreateHouseImages" element={<CreateHouseImages />} />
            <Route
              path="/HouseRoomImagesTable/:id"
              element={<HouseRoomImagesTable />}
            />
            <Route
              path="/CreateHouseRoomImages"
              element={<CreateHouseRoomImages />}
            />
            <Route
              path="/houseimagestable/:id"
              element={<HouseImagesTable />}
            />
            <Route path="/houserouter/:id" element={<HouseRouter />} />
            <Route path="/HouseRoomsTable/:id" element={<HouseRoomsTable />} />
            <Route path="/CreateHouseRooms" element={<CreateHouseRooms />} />
            <Route path="/HouseRoomsEdit/:id" element={<HouseRoomsEdit />} />
            <Route path="/CreateFamousCity" element={<CreateFamousCity />} />
            <Route
              path="/UpdateFamousCity/:id"
              element={<UpdateFamousCity />}
            />
            <Route path="/hotellisttable/:id" element={<HotelListTable />} />
            <Route path="/HotelCreate" element={<HotelCreate />} />
            <Route path="/hotellistupdate/:id" element={<HotelListUpdate />} />
            <Route path="/createroom" element={<CreateRoom />} />
            <Route path="/uptaderooms/:id" element={<UptadeRooms />} />
            <Route path="/roomimages/:id" element={<RoomImages />} />
            <Route path="/createroomimages" element={<CreateRoomImages />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/slidertable/" element={<SliderTable />} />
            <Route path="/hotelrouter/:id" element={<HotelRouter />} />
            <Route
              path="/hoteldescription/:id"
              element={<HotelDescription />}
            />
            <Route
              path="/createhoteldescription"
              element={<CreateHotelDescription />}
            />
            <Route
              path="/updatehoteldescription/:id"
              element={<UpdateHotelDescription />}
            />
            <Route path="/roomlisttable/:id" element={<RoomListTable />} />
            {/* <Route path="/hotellisttable2/:id" element={<HotelListTable2 />} /> */}
            <Route
              path="/HotelImagesTable/:id"
              element={<HotelImagesTable />}
            />
            <Route path="/CreateHotelImages" element={<CreateHotelImages />} />
            <Route
              path="/UpdateHotelImages/:id"
              element={<UpdateHotelImages />}
            />
            <Route path="/createslider" element={<CreateSlider />} />
            <Route path="/updateslider/:id" element={<UpdateSlider />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
