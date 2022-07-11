import { MDBRow, MDBCol, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { useGlobalCartInfoContext } from "../../contexts/cartContext";
import { useSelector } from "react-redux";
import CartSummary from "./components/CartSummary";
import SingleCartItem from "./components/SingleCartItem";
import LoginToContinue from "../../common_components/LoginToContinue";
const Cart = () => {
  let { cartItemListDetails } = useGlobalCartInfoContext();
  let { user } = useSelector((state) => state.user);

  if (!user) {
    return <LoginToContinue />;
  }
  return (
    <div className="cart">
      <MDBRow className="align-items-center justify-content-center">
        <h5 className="text-center mb-5">Your Cart</h5>
        {cartItemListDetails?.length > 0 ? (
          <>
            {" "}
            {/* cart-item-list */}
            <MDBCol size="12" lg="6">
              <MDBTable borderless>
                {/* table body */}
                <MDBTableBody>
                  {/* single cart item */}
                  {cartItemListDetails.map((i, index) => {
                    return <SingleCartItem key={index} {...i} />;
                  })}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            {/* summary */}
            <MDBCol size="12" lg="3">
              <CartSummary />
            </MDBCol>
          </>
        ) : (
          <p className="vh-100 text-center">Your Cart is empty!</p>
        )}
      </MDBRow>
    </div>
  );
};

export default Cart;
