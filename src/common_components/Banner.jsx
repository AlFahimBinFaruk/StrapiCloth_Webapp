//MDB
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

//banner component
const Banner = () => {
  return (
    <MDBCard className="mb-5 rounded-0 shadow">
      <MDBCardBody className="d-flex justify-content-evenly align-items-center flex-wrap">
        {/* banner text */}
        <div className="text col-md-5">
          <h3 className="text-dark">Welcome to strapi cloths!</h3>
          <p>
            Our shop is the Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Sunt inventore ullam alias. Porro optio ex, beatae dolorem
            temporibus dolorum doloremque! Incidunt, officiis!
          </p>
        </div>
        {/* banner image */}
        <div className="img">
          <img
            src="https://th.bing.com/th/id/R.1d5c2fcc2801ec40edd94ce2d1d0752f?rik=7jRBCIjd7VTyYQ"
            alt=""
            width={250}
            height={250}
          />
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Banner;
