import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
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
import HotelImagesTable from "./components/HotelListDetail/HotelImages/HotelImagesTable"
// import HotelListTable2 from "./components/HotelList/HotelListTable2";

import HotelCreate from "./components/HotelList/HotelCreate";
import HotelRouter from "./components/HotelListDetail/HotelRouter";
import HotelDescription from "./components/HotelListDetail/HotelDescription";
import RoomListTable from "./components/HotelListDetail/Rooms/RoomListTable";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/famouscitytable/" element={<FamousCityTable />} />
          <Route path="/pagination" element={<Pagination />} />

          <Route path="/slidertable/" element={<SliderTable />} />
          <Route path="/hotellisttable/:id" element={<HotelListTable />} />
          <Route path="/hotelrouter/:id" element={<HotelRouter />} />
          <Route path="/hoteldescription/:id" element={<HotelDescription />} />
          <Route path="/roomlisttable/:id" element={<RoomListTable />} />
          




          {/* <Route path="/hotellisttable2/:id" element={<HotelListTable2 />} /> */}

          <Route path="/HotelImagesTable/:id" element={<HotelImagesTable />} />
          
          <Route path="/createslider" element={<CreateSlider />} />
          <Route path="/updateslider/:id" element={<UpdateSlider />} />
          <Route path="/CreateFamousCity" element={<CreateFamousCity />} />
          <Route path="/UpdateFamousCity/:id" element={<UpdateFamousCity />} />
          <Route path="/HotelCreate" element={<HotelCreate />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
