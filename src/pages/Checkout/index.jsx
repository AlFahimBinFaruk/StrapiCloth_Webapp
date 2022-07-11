import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import { useGlobalCartInfoContext } from "../../contexts/cartContext";
import { useDispatch, useSelector } from "react-redux";
import OrderSummary from "./components/OrderSummary";
import LoginToContinue from "../../common_components/LoginToContinue";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import ServerError from "../Error/ServerError";
import { placeNewOrder,reset } from "../../features/order/orderSlice";

const Checkout = () => {
  let { cartItemListDetails, clearCart } = useGlobalCartInfoContext();
  //alert context
  let { setShowAlert } = useGlobalAlertContext();
  //user selector
  let { user } = useSelector((state) => state.user);
  //order selector
  let { isOrderLoading, isOrderError, isOrderSuccess } = useSelector(
    (state) => state.order
  );
  //dispatch
  let dispatch = useDispatch();
  //subtotal
  const [subtotal, setSubtotal] = useState(0);

  const calculateSummary = () => {
    let total = 0;
    cartItemListDetails.map((i) => {
      total += Number(i.price) * Number(i.qty);
    });
    setSubtotal(total);
  };

  //form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const { name, email, address } = formData;

  //handle change of input
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  //handle submit
  const handleSubmit = () => {
    if (!name || !email || !address || !cartItemListDetails) {
      setShowAlert({ msg: "provide all info", color: "danger" });
    } else {
      let orderData = {
        userId: String(user.user.id),
        name,
        email,
        address,
        orderDetails: cartItemListDetails,
        total: subtotal,
      };
      dispatch(placeNewOrder(orderData));
      //clear the cart after order is placed
      clearCart();
    }
  };

  useEffect(() => {
    if (cartItemListDetails) {
      calculateSummary();
    }
    return ()=>reset()
  }, [cartItemListDetails]);

  //if user not logged int
  if (!user) {
    return <LoginToContinue />;
  }

  //loadng
  if (isOrderLoading) {
    return <LoadingSpinner />;
  }
  //error
  if (isOrderError) {
    return <ServerError />;
  }
  //if order successful
  if (isOrderSuccess) {
    return <h6 className="vh-100 text-center">Order Placed successfully!</h6>;
  }
  return (
    <div className="checkout">
      <MDBRow className="align-items-center justify-content-center">
        {/* checkout form */}
        <MDBCol size="12" lg="5">
          <div className="checkout-form my-5">
            <h5 className="mb-3">Please provide all the checkout info.</h5>
            <div>
              <MDBInput
                id="name"
                value={name}
                onChange={handleChange}
                wrapperClass="mb-2"
                label="Name"
                size="sm"
              />
              <MDBInput
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                wrapperClass="mb-2"
                label="Email address"
                size="sm"
              />
              <MDBTextArea
                label="Address"
                id="address"
                value={address}
                onChange={handleChange}
                rows={4}
                size="sm"
              />
              <h6 className="text-muted mt-3">
                Payment type:<span className="text-dark ms-1">COD</span>
              </h6>
            </div>
          </div>
          {/* place order btn */}
          <MDBBtn className="rounded-0 mt-2" block onClick={handleSubmit}>
            Place Order
          </MDBBtn>
        </MDBCol>
        {/* order summary */}
        <MDBCol size="12" lg="4">
          {cartItemListDetails && subtotal && (
            <OrderSummary
              cartItemListDetails={cartItemListDetails}
              subtotal={subtotal}
            />
          )}
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Checkout;
