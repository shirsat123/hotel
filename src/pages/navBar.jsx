import { Link } from "react-router-dom";


 function NavBar() {
  return (
    <div id="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/admin">Admin</Link>
      <Link className="link" to="/contact">Contact Us </Link>
      
    </div>
  );
}
export default NavBar;



  
  