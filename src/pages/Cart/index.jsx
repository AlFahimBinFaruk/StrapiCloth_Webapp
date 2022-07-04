import { MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import CartSummary from "./components/CartSummary";
import SingleCartItem from "./components/SingleCartItem";
const Cart = () => {
  return (
    <div className="cart">
      <MDBRow className="align-items-center justify-content-center">
        <h5 className="text-center mb-5">Your Cart</h5>
        {/* cart-item-list */}
        <MDBCol size="12" lg="6">
          <MDBTable borderless>
            {/* table body */}
            <MDBTableBody>
              {/* single cart item */}
              <SingleCartItem />
              <SingleCartItem />
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        {/* summary */}
        <MDBCol size="12" lg="3">
          <CartSummary />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Cart;
