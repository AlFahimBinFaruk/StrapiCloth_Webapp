//MDB
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
const SinglePendingPaymentItem = () => {
  return (
    <tr className="verticle-align-middle text-dark">
      {/* order id */}
      <td>
        <span className="fw-bold">Order Id:32131anbb</span>
      </td>
      {/* price */}
      <td>
        <span className="fw-bold">Total:$25.33</span>
      </td>
      <td>
        <div className="d-flex justify-content-evenly align-items-center">
          {/* pay now btn */}
          <MDBBtn size="sm" color="success">
            Pay now
          </MDBBtn>
          {/* delete order btn */}
          <MDBIcon fas icon="trash" role="button" />
        </div>
      </td>
    </tr>
  );
};

export default SinglePendingPaymentItem;
