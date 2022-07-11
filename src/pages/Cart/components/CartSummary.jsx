//MDB
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalCartInfoContext } from "../../../contexts/cartContext";
const CartSummary = () => {
  let { cartItemListDetails } = useGlobalCartInfoContext();
  //navigate
  let navigate=useNavigate()
  //subtotal
  const [subtotal, setSubtotal] = useState(0)

  const calculateSummary = () => {
    let total = 0;
    cartItemListDetails.map((i) => {
      total += Number(i.price) * Number(i.qty);
    });
    setSubtotal(total)
  };

  useEffect(() => {
    calculateSummary();
  }, [cartItemListDetails]);

  return (
    <MDBCard className="shadow rounded-0">
      <MDBCardBody>
        <MDBCardTitle className="text-dark">Cart Summary</MDBCardTitle>
        {/* product count */}
        <div className="product-count">
          {/* subtotal */}
          <div className="d-flex justify-content-between align-items-center mt-4 text-dark">
            <p className="mb-0">Subtotal</p>
            <p className="mb-0">
              <b>${subtotal}</b>
            </p>
          </div>

          <MDBBtn className="rounded-0 mt-2" block onClick={()=>navigate("/checkout")}>
            Proceed Checkout
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CartSummary;
