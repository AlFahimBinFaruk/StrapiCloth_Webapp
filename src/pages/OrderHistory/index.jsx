import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import SingleOrderHistoryItem from "./components/SingleOrderHistoryItem";
const OrderHistory = () => {
  return (
    <MDBCol size="12" lg="6" className="mx-auto">
      <div className="mb-5 text-center">
        <h5>Your pending order list</h5>
        <p>
          <small>
            visit <a href="http://333">Pending payments</a> page to pay for
            orders which payments are pending{" "}
          </small>
        </p>
      </div>

      <MDBTable>
        {/* table body */}
        <MDBTableBody>
          <SingleOrderHistoryItem />
        </MDBTableBody>
      </MDBTable>
    </MDBCol>
  );
};

export default OrderHistory;
