//MDB
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
//singleCartItem component
const SingleCartItem = () => {
  return (
    <tr className="verticle-align-middle text-dark">
      {/* product image */}
      <td>
        <img
          src="https://th.bing.com/th/id/OIP.7Vz-oiStf1VjZWuIIk_3ywHaF-?w=254&h=205&c=7&r=0&o=5&pid=1.7"
          alt="product-img"
          height={30}
          width={30}
          className="rounded-circle"
        />
      </td>
      {/* name */}
      <td>
        <span className="fw-bold">Expresso Latte</span>
      </td>
      {/* price */}
      <td>
        <span className="fw-bold">$25.33</span>
      </td>
      <td>
        <div className="d-flex justify-content-evenly align-items-center">
          {/* manage qty */}
          <div className="qty d-flex align-items-center me-3">
            {/* decrease btn */}
            <MDBBtn floating size="sm" color="danger">
              <MDBIcon fas icon="minus" size="sm" />
            </MDBBtn>
            {/* qty indicator */}
            <div className="mx-3 my-1 my-lg-0">
              <h6 className="mb-0">4</h6>
            </div>
            {/* increase btn */}
            <MDBBtn floating size="sm" color="success">
              <MDBIcon fas icon="plus" size="sm" />
            </MDBBtn>
          </div>
          {/* delete item btn */}
          <MDBIcon fas icon="trash" role="button" />
        </div>
      </td>
    </tr>
  );
};

export default SingleCartItem;
