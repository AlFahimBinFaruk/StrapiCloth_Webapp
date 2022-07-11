//MDB
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";

const OrderSummary = ({ cartItemListDetails, subtotal }) => {
  return (
    <MDBCard className="shadow rounded-0">
      {cartItemListDetails.length > 0 ? (
        <MDBCardBody>
          <MDBCardTitle className="text-dark">Order Summary</MDBCardTitle>
          {/* product count */}
          <div className="product-count">
            {/* prodcut list */}
            <div className="product-list">
              {/* single product */}
              {cartItemListDetails.map((i) => {
                return (
                  <div className="single-product">
                    <div className="d-flex justify-content-between align-items-center">
                      <small>{i.title}</small>
                      <small>
                        <b>${i.price}</b> X {i.qty}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* subtotal */}
            <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
              <p className="mb-0">Subtotal</p>
              <p className="mb-0">
                <b>${subtotal}</b>
              </p>
            </div>

           
          </div>
        </MDBCardBody>
      ) : (
        <p className="vh-100 text-center">Your Cart is empty!!</p>
      )}
    </MDBCard>
  );
};

export default OrderSummary;
