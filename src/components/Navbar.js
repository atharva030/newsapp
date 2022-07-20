
import { Link } from "react-router-dom";

import Logo from "./Logo.png"
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light "
        style={{ background: "gainsboro" }}
      >
  
        <div className="container-fluid">
          <img src={Logo} alt="logo" width="53" height="38"/>
          <Link className="navbar-brand px-2" to="/">
            अबतक
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
{/* 
        <div className="btn-group" style={{ margin: "0 10rem" }}>
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "11rem" }}
          >
            Choose Region
          </button>
          <ul className="dropdown-menu " style={{ opacity: "0.9" }}>
            <li>
              <a className="dropdown-item" to="/india">
                India
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/united">
                United States
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/canada">
                Canada
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/russia">
                Russia
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
