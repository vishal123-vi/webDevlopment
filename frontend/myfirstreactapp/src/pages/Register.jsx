import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("Customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, name, email, phone, password, confirmPassword, agree });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center  ">
        <div
          className="card bg-opacity-90 p-4 bg-white shadow-lg rounded-4 "
          style={{ width: "420px", margin: "40px auto" }}
        >
          <h2 className="text-center text-danger">Create Account</h2>
          <p className="text-center text-muted">
            Join us as a Customer, Restaurant, or Rider
          </p>
          <label htmlFor="">Register as:</label>
          <div className="d-flex gap-3">
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleCustomer"
              />
              <label className="form-check-label ms-2" htmlFor="roleCustomer">
                Customer
              </label>
            </div>

            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleRestaurant"
              />
              <label className="form-check-label ms-2" htmlFor="roleRestaurant">
                Restaurant
              </label>
            </div>

            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleRider"
              />
              <label className="form-check-label ms-2" htmlFor="roleRider">
                Rider
              </label>
            </div>
          </div>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="UserName"
              placeholder="Enter your full name"
              className=" form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className=" form-control mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className=" form-control mt-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className=" form-control mt-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className=" form-control mt-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div>
              <input
                type="checkbox"
                className="me-2"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label>
                I agree to the <span className="text-danger hover-line text-primary ">terms and conditions.</span>
              </label>
            </div>
            <div>
              <button className=" w-100  bg-danger mt-3 px-2 py-2 text-white fw-bold">
                Register
              </button>
            </div>

             <br />
            <p>
              Already registered?<Link to="/login"> Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
