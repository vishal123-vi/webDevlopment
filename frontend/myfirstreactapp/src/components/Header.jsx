import {Link} from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-0 d-flex justify-content-between align-items-center">
        <span className="text-primary fs-4 fw-bold">MY Company</span>
        <div className="d-flex gap-4">
        
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-secondary">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </>
  );
}
export default Header;
