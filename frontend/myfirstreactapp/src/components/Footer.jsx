import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-3">
        <p className="text-secondary  text-center align-text-top">
          Your favorite food delivery platform connecting customers with
          restaurants and riders.
        </p>

        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-warning">Craving</h2>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4 MT-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-light text-decoration-none vishal">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/OrderNow" className="text-light text-decoration-none vishal">
                    Order Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Restaurants */}
            <div className="col-md-2 mb-4">
              <h5>For Restaurants</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Restaurant Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Riders */}
            <div className="col-md-2 mb-4">
              <h5>For Riders</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Become a Rider
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Rider Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-md-3 mb-4">
              <h5>Feedback & Support</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Submit Feedback
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-light text-decoration-none vishal">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-2 mb-md-0">
              © 2026 Cravings. All rights reserved.
            </p>

            <div>
              <Link
                to="/privacy"
                className="text-light text-decoration-none vishal me-3"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-light text-decoration-none vishal me-3"
              >
                Terms of Service
              </Link>

              <Link to="/sitemap" className="text-light text-decoration-none vishal">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
