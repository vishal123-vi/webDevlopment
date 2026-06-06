import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginpage from "../assets/login.png";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email :", email);
    console.log("password :", password);
  };

  return (
    <>
      <div>
        <div
          className="card  bg-opacity-90 p-4 bg-white shadow-lg rounded-4"
          style={{ width: "420px" }}
        >
          <h1 className="text-danger text-center fw-bold">Welcome Back</h1>
          <p className="text-center text- text-muted">
            Login to your Cravings account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="form-control pe-5"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <FaEye
                className="text-muted position-absolute"
                style={{ right: "12px", top: "45px", cursor: "pointer" }}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" className="me-2" />
                <label className="text-muted">Remember me</label>
              </div>

              <label className="text-danger" id="forget">
                Forgot Password?
              </label>
            </div>

            <button
              type="submit"
              className="w-100 bg-danger border-0 py-2 text-white fw-bold rounded"
            >
              Login
            </button>

            <hr />
            <p>
              don't have account ?<Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
