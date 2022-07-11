import { MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import ServerError from "../Error/ServerError";
import { register } from "../../features/user/userSlice";

const Register = () => {
  //navigate
  let navigate = useNavigate();
  //alert context
  let { setShowAlert } = useGlobalAlertContext();
  //dispatch
  const dispatch = useDispatch();

  //get initial state from auth store
  const { isUserLoading, isUserError, isUserSuccess } = useSelector(
    (state) => state.user
  );
  //form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  //handle change of input
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  //handle submit
  const handleSubmit = () => {
    //see if user provided all info
    if (username && email && password) {
      //see if passwords match

      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    } else {
      setShowAlert({ msg: "Provide all info", color: "danger" });
    }
  };

  //if user success
  if (isUserSuccess) {
    navigate("/");
    setShowAlert({ msg: "login successful", color: "success" });
  }
  //loading
  if (isUserLoading) {
    return <LoadingSpinner />;
  }
  //error
  if (isUserError) {
    return <ServerError />;
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="8" lg="4">
        <h5 className="text-center">Register</h5>
        <MDBInput
          className="mb-2"
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          label="Username"
          size="sm"
        />
        <MDBInput
          className="mb-2"
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          label="Email address"
          size="sm"
        />
        <MDBInput
          className="mb-2"
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
          label="Password"
          size="sm"
        />

        <MDBBtn type="submit" onClick={handleSubmit} size="sm" block>
          Register
        </MDBBtn>
      </MDBCol>
    </div>
  );
};

export default Register;
