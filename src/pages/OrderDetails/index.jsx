import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import SingleOrderDetailsItem from "./components/SingleOrderDetailsItem";

const OrderDetails = () => {
  return (
    <MDBCol size="12" lg="6" className="mx-auto">
      <h6 className="mb-4">Order Id:3232</h6>
      <MDBTable>
        {/* table body */}
        <MDBTableBody>
          <SingleOrderDetailsItem />
          <SingleOrderDetailsItem />
        </MDBTableBody>
      </MDBTable>
      <div className="my-5">
        <h6>
          <span className="text-muted">Total:</span>$236
        </h6>
        <h6>
          <span className="text-muted"> order status:</span>pending
        </h6>
        <h6>
          <span className="text-muted">payment status:</span>pending
        </h6>
        <h6>
          <span className="text-muted">tran id:</span>pending
        </h6>
        <h6>
          <span className="text-muted">address:</span>dublin,ireland
        </h6>
      </div>
    </MDBCol>
  );
};

export default OrderDetails;
