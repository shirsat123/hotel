import { Link } from "react-router-dom";

 function NavBar() {
  return (
    <div id="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/admin">Admin</Link>
      <Link className="link" to="/registrationForm">Booking</Link>
      <Link className="link">Contact Us</Link>
      <Link className="link">About Us</Link>
    </div>
  );
}
export default NavBar;