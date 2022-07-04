import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

const ProductDetails = () => {
  return (
    <div className="product-details  ">
      <MDBRow className="align-items-center justify-content-center vh-100">
        {/* left */}
        <MDBCol size="12" md="6" lg="4">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            alt=""
            className="img-fluid border border-warning rounded"
          />
        </MDBCol>
        {/* right */}
        <MDBCol size="12" md="6" lg="4">
          <h5 className="title">Black Hoodie</h5>
          <p className="desc">
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              tempora, molestiae debitis iure, voluptatem officia quidem
              dignissimos ullam eaque illum, vel minima! Inventore odit numquam
              porro voluptates culpa laborum eos esse tempore deserunt?
            </small>
          </p>
          <h6 className="category">
            <span className="text-muted">Category</span>:Hoodie
          </h6>
          <h6 className="price">$45</h6>
          <h6 className="availQty">
            <span className="text-muted">Available Qty</span>:54
          </h6>
          <div className="size mt-3">
            <h6>
              <span className="text-muted">Selected Size</span> :XL
            </h6>
            <p className="available-sizes">
              <span className="me-1 text-uppercase border py-1 px-2">s</span>
              <span className="me-1 text-uppercase border py-1 px-2">m</span>
              <span className="me-1 text-uppercase border py-1 px-2">lg</span>
              <span className="me-1 text-uppercase border py-1 px-2">xl</span>
            </p>
          </div>
          <div className="color mt-3">
            <h6>
              <span className="text-muted">Selected Color</span>:Black
            </h6>
            <p className="available-colors">
              <span className="me-2 rounded-circle bg-danger px-2 border border-1 border-dark" />
              <span className="me-2 rounded-circle bg-dark px-2 border border-1 border-dark" />
              <span className="me-2 rounded-circle bg-warning px-2 border border-1 border-dark" />
            </p>
          </div>
          {/* add to cart btn */}
          <MDBBtn>Add to cart</MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ProductDetails;
