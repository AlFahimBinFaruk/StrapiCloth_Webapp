import { MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import LoginToContinue from "../../common_components/LoginToContinue";
const Account = () => {
  //alert context
  const { setShowAlert } = useGlobalAlertContext();
  //navigate
  let navigate = useNavigate();
  //dispatch
  const dispatch = useDispatch();

  //get initial state from auth store
  const { user } = useSelector((state) => state.user);
  let { username, email } = user?.user || false;

  //handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setShowAlert({ msg: "logout successful", color: "warning" });
  };

  if (!user) {
    return <LoginToContinue/>;
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      {user && (
        <MDBCol size="12" md="8" lg="4">
          <div className="d-flex justify-content-between">
            <h5 className="text-center">Account Settings</h5>
            <MDBBtn size="sm" color="danger" onClick={handleLogout}>
              Logout
            </MDBBtn>
          </div>

          <div className="account-info mt-4">
            <h6>Username:{username}</h6>
            <h6>Email:{email}</h6>
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
      )}
    </div>
  );
};

export default Account;
