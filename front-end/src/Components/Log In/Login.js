import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { handeMessage } from "../SweetAlert/SweetAlert";
import axios from "axios";
import "./Login.css";
import { ContextApi } from "../../Context/AuthContext";

function Login() {
  const { login } = useContext(ContextApi);
  const navigate = useNavigate();
  const [showPass, setSowPass] = useState("password");
  const [inputs, setInputs] = useState({
    first_name: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      // console.log(res.data.token);
      // handeMessage("success", msg);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      console.log(error);
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
                    name="first_name"
                    onChange={handleChange}
                  />
                  <div className="pass">
                    <MDBInput
                      id="myInput"
                      label="Type your password"
                      icon="lock"
                      group
                      type={showPass}
                      validate
                      name="password"
                      onChange={handleChange}
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
