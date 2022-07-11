import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import SingleOrderHistoryItem from "./components/SingleOrderHistoryItem";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrderList } from "../../features/order/orderSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import ServerError from "../Error/ServerError";
const OrderHistory = () => {
  //navigate
  let navigate = useNavigate();
  // user selector
  let { user } = useSelector((state) => state.user);
  //order selector
  let { myOrderList, isOrderLoading, isOrderError } = useSelector(
    (state) => state.order
  );
  console.log(myOrderList)
  //dispatch
  let dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getMyOrderList(user.user.id));
    } else {
      navigate("/login");
    }
  }, []);

  //loading
  if (isOrderLoading) {
    return <LoadingSpinner />;
  }
  //error
  if (isOrderError) {
    return <ServerError />;
  }

  return (
    <MDBCol size="12" lg="8" className="mx-auto">
      <div className="mb-5 text-center">
        <h5>Your order history</h5>
      </div>

      {myOrderList?.length > 0 ? (
        <MDBTable>
          {/* table body */}
          <MDBTableBody>
            {myOrderList.map((i)=>{
              return <SingleOrderHistoryItem id={i.id} {...i.attributes}/>
            })}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <p className="text-center vh-100">Your order history is empty!</p>
      )}
    </MDBCol>
  );
};

export default OrderHistory;
