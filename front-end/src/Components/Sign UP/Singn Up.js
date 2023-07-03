import { NavLink, useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Sign Up.css";
import { useState } from "react";
import axios from "axios";
import { handeMessage } from "../SweetAlert/SweetAlert";
function SingnUp() {
  const navigate = useNavigate();
  const URL = `http://localhost:8000/api/register`;
  const [showPass, setShowPass] = useState("password");
  const [showPassConfirm, setShowPassConfirm] = useState("password");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        first_name,
        email,
        password,
        passwordConfirm,
        phone_number,
        address,
      });
      console.log(res.data);
      handeMessage("success", res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      console.log(error.response.data);

      handeMessage("error", error.response.data);
    }
  };
  return (
    <div className="Sign_Up">
      <div className="card_sign">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form>
                <div className="header_signup">
                  <h2>
                    <i className="fa fa-user"></i> Register
                  </h2>
                </div>
                <div className="purple-text form_input">
                  <MDBInput
                    size="lg"
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <MDBInput
                    size="lg"
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="pass_signup">
                    <MDBInput
                      size="lg"
                      id="myInput"
                      label="Your password"
                      icon="lock"
                      group
                      type={showPass}
                      validate
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <h4 className="signup_eye">
                      <i
                        className="fas fa-eye"
                        onClick={() =>
                          setShowPass(
                            showPass === "password" ? "text" : "password"
                          )
                        }
                      ></i>
                    </h4>
                  </div>
                  <div className="pass_signup1">
                    <MDBInput
                      size="lg"
                      id="myInput1"
                      label="Confirm your Password"
                      icon="exclamation-triangle"
                      group
                      type={showPassConfirm}
                      validate
                      error="wrong"
                      success="right"
                      name="password"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <h4 className="signup_eye1">
                      <i
                        className="fas fa-eye"
                        onClick={() =>
                          setShowPassConfirm(
                            showPassConfirm === "password" ? "text" : "password"
                          )
                        }
                      ></i>
                    </h4>
                  </div>

                  <MDBInput
                    size="lg"
                    label="Phone Number"
                    type="number"
                    icon="fa fa-phone-square"
                    name="number"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <MDBInput
                    size="lg"
                    label="Address"
                    icon="fa fa-map-marker"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {/* <p
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {err}
                </p> */}
                <button className="btn btn-success" onClick={handleSubmit}>
                  Sign Up
                </button>
                <NavLink to="/login">
                  <button className="btn btn-danger sign_up">Log In</button>
                </NavLink>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      {/*/Form with header*/}
    </div>
  );
}

export default SingnUp;
