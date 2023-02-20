import "./admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <div id="backside"></div>
      <div className="Admin-Portal">
        <div id="h1">
          <h1>Administration</h1>
        </div>

        <Link to="/entryBook" id="link1">
          Entry Book
        </Link>
        <Link to="/filter" id="link2">
          Filter
        </Link>
      </div>
    </div>
  );
}
