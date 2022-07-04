//MDB
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";
const OrderSummary = () => {
  return (
    <MDBCard className="shadow rounded-0">
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Order Summary</MDBCardTitle>
        {/* product count */}
        <div className="product-count">
          {/* prodcut list */}
          <div className="product-list">
            {/* single product */}
            <div className="single-product">
              <div className="d-flex justify-content-between align-items-center">
                <small>Expresso Latto</small>
                <small>
                  <b>$25.33</b> X 1
                </small>
              </div>
            </div>
          </div>

          {/* subtotal */}
          <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
            <p className="mb-0">Subtotal</p>
            <p className="mb-0">
              <b>$50.63</b>
            </p>
          </div>

          <MDBBtn className="rounded-0 mt-2" block>
            Place Order
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default OrderSummary;
