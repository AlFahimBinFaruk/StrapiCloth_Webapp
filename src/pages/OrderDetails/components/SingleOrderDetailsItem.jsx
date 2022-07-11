import { Link } from "react-router-dom";

const SingleOrderDetailsItem = ({ id, qty, size, color, price }) => {
  return (
    <tr className="verticle-align-middle text-dark">
      {/* product id */}
      <td>
        <Link to={`/details/${id}`} className="fw-bold">
          Product Id:{id}
        </Link>
      </td>
      <td>
        <span className="fw-bold">qty:{qty}</span>
      </td>
      <td>
        <span className="fw-bold">price:{price}</span>
      </td>
      <td>
        <span className="fw-bold">color:{color}</span>
      </td>
      <td>
        <span className="fw-bold">size:{size}</span>
      </td>
    </tr>
  );
};

export default SingleOrderDetailsItem;
