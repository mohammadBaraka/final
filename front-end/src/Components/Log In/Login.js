import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPass, setSowPass] = useState("password");
  const [email, setEmail] = useState("");
  console.log(email);
  const [pass, setPass] = useState("");
  console.log(pass);
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
                    label="Type your email"
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
                  <div className="pass">
                    <MDBInput
                      id="myInput"
                      label="Type your password"
                      icon="lock"
                      group
                      type={showPass}
                      validate
                      value={pass}
                      name="password"
                      onChange={(e) => setPass(e.target.value)}
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

                <button className="btn btn-success">Login</button>
                <NavLink to="/signup">
                  <button className="btn btn-danger sign_up sign_up">
                    Sign Up
                  </button>
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
