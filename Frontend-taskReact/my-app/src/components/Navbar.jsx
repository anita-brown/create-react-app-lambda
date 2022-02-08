import angular from "../asset/img/angular.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="img-nav" src={angular} alt="img" />
      </Link>
      <div className=" navbar-list">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contributors">
            <li>Contributors</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
