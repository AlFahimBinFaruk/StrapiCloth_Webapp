//MDB
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useGlobalCartInfoContext } from "../../../contexts/cartContext";
//singleCartItem component
const SingleCartItem = ({ id, title, thumb, price, qty, color }) => {
  let { handleDecreaseQty, handleIncreaseQty, deleteItem } =
    useGlobalCartInfoContext();
  return (
    <tr className="verticle-align-middle text-dark">
      {/* product image */}
      <td>
        <img
          src={thumb}
          alt="product-img"
          height={40}
          width={40}
          className="rounded-circle"
        />
      </td>
      {/* name */}
      <td>
        <span className="fw-bold">{title}</span>
        <br />
        <span className="fw-bold">Color: {color}</span>
      </td>
      {/* price */}
      <td>
        <span className="fw-bold">${price}</span>
      </td>
      <td>
        <div className="d-flex justify-content-evenly align-items-center">
          {/* manage qty */}
          <div className="qty d-flex align-items-center me-3">
            {/* decrease btn */}
            <MDBBtn
              floating
              size="sm"
              color="danger"
              onClick={() => handleDecreaseQty(id)}
            >
              <MDBIcon fas icon="minus" size="sm" />
            </MDBBtn>
            {/* qty indicator */}
            <div className="mx-3 my-1 my-lg-0">
              <h6 className="mb-0">{qty}</h6>
            </div>
            {/* increase btn */}
            <MDBBtn
              floating
              size="sm"
              color="success"
              onClick={() => handleIncreaseQty(id)}
            >
              <MDBIcon fas icon="plus" size="sm" />
            </MDBBtn>
          </div>
          {/* delete item btn */}
          <MDBIcon
            fas
            icon="trash"
            role="button"
            onClick={() => deleteItem(id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default SingleCartItem;
