import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginpage from "../assets/login.png";
function Login() {
  return (
    <>
      {/* login */}
      <div className=" align-items-center justify-content-center vh-100  ">
        <div
          className=" card bg-white p-4 shadow-lg rounded-3 mt-3"
          style={{ width: "420px" }}
        >
          <h1 className="text-danger text-center fw-bold">Welcome Back</h1>
          <p className="text-center text- text-muted">
            Login to your Cravings account
          </p>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="form-control"
            />
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label fw-bold"> Password</label>

            <input
              type="Password"
              placeholder="Enter your password"
              className="form-control pe-5"
            />
            <FaEye
              className="text-muted position-absolute"
              style={{ right: "12px", top: "45px" }}
            />
          </div>
          <div>
            <input type="checkbox" className=" me-2" />
            <label className="text-muted me-5">Remember me</label>

            <label className="ms-5 text-danger" id="forget">
              Forgot Password?
            </label>
          </div>
          <div>
            <button className=" w-100  bg-danger mt-3 px-2 py-2 text-white fw-bold">
              Login
            </button>
          </div>
          <div>
            <p className="mt-3 text-center text-muted">
              Don't have an account?
            </p>
          </div>
          <div>
            <p className="text-center text-danger mt-3  fw-bold">
              Create an account
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
