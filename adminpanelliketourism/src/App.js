import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FamousCityTable from "./components/FamousCity/FamousCityTable";
import CreateFamousCity from "./components/FamousCity/CreateFamousCity";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/famouscitytable" element={<FamousCityTable />} />
          <Route path="/CreateFamousCity" element={<CreateFamousCity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
