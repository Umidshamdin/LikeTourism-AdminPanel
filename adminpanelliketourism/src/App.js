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


function App() {
  return (
    <Router>
      <Topbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/famouscitytable" element={<FamousCityTable />} />
          <Route path="/slidertable" element={<SliderTable />} />
          <Route path="/createslider" element={<CreateSlider />} />
          <Route path="/updateslider/:id" element={<UpdateSlider />} />
          <Route path="/CreateFamousCity" element={<CreateFamousCity />} />     
          <Route path="/UpdateFamousCity/:id" element={<UpdateFamousCity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
