import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const SingleProductCard = () => {
  return (
    <MDBCard className="h-100 shadow" role="button">
      <MDBCardImage
        src="https://th.bing.com/th/id/OIP.upXSw_OaQJI_waZbQi2UhgHaHZ?w=187&h=185&c=7&r=0&o=5&pid=1.7"
        alt="..."
        position="top"
      />
      <MDBCardBody>
        <div className="product-detils">
          <h5 className="product-name text-dark">Black Hoodie</h5>
          <h6 className="product-price fw-bold">$256</h6>
          <p className="stock-left text-danger">
            <small>Only 564 left</small>
          </p>
          <p className="available-sizes">
            <span className="me-1 text-uppercase border py-1 px-2">s</span>
            <span className="me-1 text-uppercase border py-1 px-2">m</span>
            <span className="me-1 text-uppercase border py-1 px-2">lg</span>
            <span className="me-1 text-uppercase border py-1 px-2">xl</span>
          </p>
          <p className="available-colors">
            <span className="me-2 rounded-circle bg-danger px-2 border border-1 border-dark" />
            <span className="me-2 rounded-circle bg-dark px-2 border border-1 border-dark" />
            <span className="me-2 rounded-circle bg-warning px-2 border border-1 border-dark" />
          </p>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleProductCard;
