import { MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import SinglePendingPaymentItem from "./components/SinglePendingPaymentItem";
const PendingPayments = () => {
  return (
    <MDBCol size="12" lg="6" className="mx-auto">
      <h5 className="mb-5 text-center">Your pending order list</h5>
      <MDBTable>
        {/* table body */}
        <MDBTableBody>
          {/* single cart item */}
          <SinglePendingPaymentItem />
          <SinglePendingPaymentItem />
        </MDBTableBody>
      </MDBTable>
    </MDBCol>
  );
};

export default PendingPayments;
