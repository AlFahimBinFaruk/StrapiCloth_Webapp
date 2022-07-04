import { MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
const Login = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="8" lg="4">
        <h5 className="text-center">Login</h5>
        <MDBInput
          className="mb-2"
          type="email"
          id="form1Example1"
          label="Email address"
          size="sm"
        />
        <MDBInput
          className="mb-2"
          type="password"
          id="form1Example2"
          label="Password"
          size="sm"
        />

        <MDBBtn type="submit" size="sm" block>
          Login
        </MDBBtn>
      </MDBCol>
    </div>
  );
};

export default Login;
