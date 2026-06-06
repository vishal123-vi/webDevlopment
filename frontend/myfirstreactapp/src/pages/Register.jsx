function Register() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className=" border p-2 mt-5 bg-light shadow rounded"
          style={{ width: "420px" }}
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
          <form>
            <input
              type="text"
              name="UserName"
              placeholder="Enter your full name"
              className=" form-control"
            />

            <input
              type="Email"
              name="UserName"
              placeholder="Enter your Email"
              className=" form-control mt-3"
            />

            <input
              type="number"
              name="UserName"
              placeholder="Enter your phone number"
              className=" form-control mt-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className=" form-control mt-3"
            />
            <input
              type="password"
              name="conformpassword"
              placeholder="Enter your conform  password"
              className=" form-control mt-3"
            />
            <div>
              <input type="radio" className="me-2" />
              <label className="test-white">
                I agree to the terms and conditions.
              </label>
            </div>
            <div>
              <button className=" w-100  bg-danger mt-3 px-2 py-2 text-white fw-bold">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
