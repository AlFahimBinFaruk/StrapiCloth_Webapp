import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const SingleCategoryCard = ({ id, title }) => {
  let navigate = useNavigate();
  return (
    <MDBCard
      className="rounded-0 shadow h-100"
      onClick={() => navigate(`/shop/${id}`)}
      role="button"
    >
      <MDBCardBody>
        <h5>{title}</h5>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleCategoryCard;
