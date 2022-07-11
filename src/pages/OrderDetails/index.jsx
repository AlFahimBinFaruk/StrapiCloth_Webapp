import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import SingleOrderDetailsItem from "./components/SingleOrderDetailsItem";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrderDetails, reset } from "../../features/order/orderSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import ServerError from "../Error/ServerError";
const OrderDetails = () => {
  let { orderId } = useParams();
  //dispatch
  let dispatch = useDispatch();
  //order selector
  let { myOrderDetails, isOrderLoading, isOrderError } = useSelector(
    (state) => state.order
  );
  let { id, attributes } = myOrderDetails || false;
  let {
    address,
    email,
    orderDetails,
    orderStatus,
    orderType,
    paymentStatus,
    total,
  } = attributes || false;
  useEffect(() => {
    if (orderId) {
      dispatch(getMyOrderDetails(orderId));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, orderId]);
  //loading
  if (isOrderLoading) {
    return <LoadingSpinner />;
  }
  //error
  if (isOrderError) {
    return <ServerError />;
  }
  return (
    <MDBCol size="12" lg="6" className="mx-auto">
      {orderDetails && (
        <>
          <h6 className="mb-4">Order Id:{id}</h6>
          <MDBTable>
            {/* table body */}
            <MDBTableBody>
              {orderDetails.map((i) => {
                return <SingleOrderDetailsItem {...i} />;
              })}
            </MDBTableBody>
          </MDBTable>
          <div className="my-5">
            <h6>
              <span className="text-muted">Total:</span>${total}
            </h6>
            <h6>
              <span className="text-muted"> order status:</span>
              {orderStatus}
            </h6>
            <h6>
              <span className="text-muted">payment status:</span>
              {paymentStatus}
            </h6>
            <h6>
              <span className="text-muted">order type:</span>
              {orderType}
            </h6>
            <h6>
              <span className="text-muted">address:</span>
              {address}
            </h6>
            <h6>
              <span className="text-muted">email:</span>
              {email}
            </h6>
          </div>
        </>
      )}
    </MDBCol>
  );
};

export default OrderDetails;
