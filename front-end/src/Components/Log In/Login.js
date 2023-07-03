import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { handeMessage } from "../SweetAlert/SweetAlert";
function Login() {
  const URL = `http://localhost:8000/api/login`;
  const [showPass, setSowPass] = useState("password");
  const [first_name, setFirstName] = useState("");
  const [password, setPassord] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        first_name,
        password,
      });
      console.log(res.data);
      handeMessage("success", res.data.message);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 2500);
    } catch (error) {
      console.log(error.response.data);

      handeMessage("error", error.response.data);
    }
  };
  return (
    <div className="container-home">
      <div className="card_form card_opacity">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form>
                <div className="form-header">
                  <h2>
                    <i className="fa fa-lock"></i> Login
                  </h2>
                </div>
                <div className="purple-text form_input">
                  <MDBInput
                    label="Type your Name"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <div className="pass">
                    <MDBInput
                      id="myInput"
                      label="Type your password"
                      icon="lock"
                      group
                      type={showPass}
                      validate
                      value={password}
                      name="password"
                      onChange={(e) => setPassord(e.target.value)}
                    />
                    <h4 className=" text-purple eye_position">
                      <i
                        className="fas fa-eye"
                        onClick={() =>
                          setSowPass(
                            showPass === "password" ? "text" : "password"
                          )
                        }
                      ></i>
                    </h4>
                  </div>
                </div>

                <button onClick={handleSubmit} className="btn btn-success">
                  Login
                </button>
                <NavLink to="/signup">
                  <button className="btn btn-danger sign_up ">Sign Up</button>
                </NavLink>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Login;
