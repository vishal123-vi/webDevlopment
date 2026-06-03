import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logoRicr from "../assets/logoricr.png";

function Header({ dark, setDark }) {
  return (
    <>
      <header className="py-2 sticky-top">
        {/* <div className=""> */}
        <div className=" shadow-lg rounded-4 border p-3 " id="background-color">
          <div>
            {/* logo */}
            <div className="d-flex align-items-center justify-content-between">
              <img
                src={logoRicr}
                alt="Logo"
                style={{ height: "48px", width: "auto" }} 
              
                 />

              {/* navbar */}
              <div className="d-flex gap-4" id="nav-link">
                <Link to="/" className=" text-dark fw-semibold fs-5">
                  Home
                </Link>
                <Link to="/about" className="text-dark fw-semibold fs-5">
                  About
                </Link>
                <Link to="/Product" className="text-dark fw-semibold fs-5">
                  Product
                </Link>
                <Link to="/Contact-Us" className="text-dark fw-semibold fs-5">
                  Contact Us
                </Link>
              </div>
              {/* Button*/}
              <div className="d-flex gap-2">
                <button
                  type="button"
                  onClick={() => setDark(!dark)}
                  className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px" }}
                  aria-label="Toggle theme"
                >
                  {dark ? <FaSun /> : <FaMoon />}
                </button>   
                <Link to="/login">
                  <button className=" btn btn-outline rounded-pill px-4 text-white fs-5">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" rounded-5 px-4 py-2 fs-5">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
