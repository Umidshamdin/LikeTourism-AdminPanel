import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu"></div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/slidertable" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Slider
              </li>
            </Link>
            <Link to="/famouscitytable" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Famouscity
              </li>
            </Link>

            <Link to="/housetable" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                House
              </li>
            </Link>
            {/* 
            <Link to="/hotellisttable" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                HotelList
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
