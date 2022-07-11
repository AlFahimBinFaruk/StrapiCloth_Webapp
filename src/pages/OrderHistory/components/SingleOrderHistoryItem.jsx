import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cancelMyOrder } from "../../../features/order/orderSlice";
const SingleOrderHistoryItem = ({ id, total, paymentStatus, orderStatus }) => {
  //navigate
  let navigate = useNavigate();
  //dispatch
  let dispatch = useDispatch();
  //handle cencel order
  const handleCancelOrder = (orderId) => {
    dispatch(cancelMyOrder(orderId));
  };
  return (
    <tr
      className="verticle-align-middle text-dark"
      onClick={() => navigate(`/order-details/${id}`)}
      role="button"
    >
      {/* order id */}
      <td>
        <span className="fw-bold">Order Id:{id}</span>
      </td>
      {/* price */}
      <td>
        <span className="fw-bold">Total:${total}</span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">Payment status</span>:{paymentStatus}
        </span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">Order Status</span>:{orderStatus}
        </span>
      </td>
      {orderStatus !== "canceled" && (
        <td>
          <MDBBtn
            size="sm"
            color="danger"
            onClick={() => handleCancelOrder(id)}
          >
            Cencel Order
          </MDBBtn>
        </td>
      )}
    </tr>
  );
};

export default SingleOrderHistoryItem;
