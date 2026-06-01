import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    `nav-link px-0 fw-semibold ${location.pathname === path ? "text-primary" : "text-dark"}`;

  return (
    <header className="py-3">
      <div className="container">
        <div className="bg-white shadow-sm rounded-4 border px-3 px-lg-4 py-3">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white fw-bold"
                style={{ width: 42, height: 42 }}
              >
                M
              </div>
              <span className="fs-4 fw-bold text-dark">MY Company</span>
            </Link>

            <nav className="d-none d-lg-flex align-items-center gap-4">
              <Link to="/" className={navLinkClass("/")}>
                Home
              </Link>
              <Link to="/courses" className={navLinkClass("/courses")}>
                Courses
              </Link>
              <Link to="/about" className={navLinkClass("/about")}>
                About
              </Link>
              <Link to="/contact" className={navLinkClass("/contact")}>
                Contact
              </Link>
            </nav>

            <div className="d-none d-lg-flex align-items-center gap-2">
              <Link to="/login" className="btn btn-outline-primary rounded-pill px-4">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary rounded-pill px-4">
                Register
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-outline-primary d-lg-none rounded-circle"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          {menuOpen && (
            <div className="d-lg-none pt-3 mt-3 border-top">
              <div className="d-grid gap-2">
                <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass("/")}>
                  Home
                </Link>
                <Link
                  to="/courses"
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass("/courses")}
                >
                  Courses
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass("/about")}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass("/contact")}
                >
                  Contact
                </Link>
                <div className="d-flex gap-2 pt-2">
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-outline-primary flex-fill rounded-pill"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-primary flex-fill rounded-pill"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
