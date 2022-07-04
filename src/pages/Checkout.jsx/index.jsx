import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";

const Checkout = () => {
  return (
    <div className="checkout">
      <MDBRow className="align-items-center justify-content-center">
        {/* checkout form */}
        <MDBCol size="12" lg="5">
          <CheckoutForm />
        </MDBCol>
        {/* order summary */}
        <MDBCol size="12" lg="4">
          <OrderSummary />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Checkout;
