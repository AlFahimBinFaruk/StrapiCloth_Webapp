import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import ColorCircle from "../../../common_components/ColorCircle";
import SizeBox from "../../../common_components/SizeBox";

const SingleProductCard = ({
  id,
  title,
  price,
  thumbnail,
  availQty,
  color,
  size,
}) => {
  // naviatete
  let navigate=useNavigate()
  //color arr
  let colorArr = color.split(",");
  //size arr
  let sizeArr = size.split(",");
  return (
    <MDBCard className="h-100 shadow" role="button" onClick={()=>navigate(`/details/${id}`)}>
      <MDBCardImage
        src={thumbnail.data.attributes.url}
        alt="..."
        position="top"
      />
      <MDBCardBody>
        <div className="product-detils">
          <h5 className="product-name text-dark">{title}</h5>
          <h6 className="product-price fw-bold">${price}</h6>
          <p className="stock-left text-danger">
            <small>Only {availQty} left</small>
          </p>
          <p className="available-sizes">
            {sizeArr &&
              sizeArr.map((i) => {
                return <SizeBox size={i} />;
              })}
          </p>
          <p className="available-colors">
            {colorArr &&
              colorArr.map((i) => {
                return <ColorCircle color={i} />;
              })}
          </p>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleProductCard;
