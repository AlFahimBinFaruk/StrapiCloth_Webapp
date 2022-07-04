import { MDBCol, MDBBtn } from "mdb-react-ui-kit";
const Account = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="8" lg="4">
        <div className="d-flex justify-content-between">
          <h5 className="text-center">Account Settings</h5>
          <MDBBtn size="sm" color="danger">
            Logout
          </MDBBtn>
        </div>

        <div className="account-info mt-4">
          <h6>Username:john doe</h6>
          <h6>Email:johndoe@gmail.com</h6>
        </div>

        <div className="d-flex justify-content-around mt-5">
          <MDBBtn size="sm" color="dark">
            Order History
          </MDBBtn>
          <MDBBtn size="sm" color="warning">
            Pending payments
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Account;
