import "./admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <div id="backside"></div>
      <div className="Admin-Portal">
        <div id="h1">
          <h1>ADMIN PORTAL</h1>
        </div>

        <Link to="/bookEntry" id="link1">
          Book Entry
        </Link>
        
      </div>
    </div>
  );
}
