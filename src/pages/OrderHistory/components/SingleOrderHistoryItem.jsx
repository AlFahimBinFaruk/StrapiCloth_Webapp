const SingleOrderHistoryItem = () => {
  return (
    <tr className="verticle-align-middle text-dark">
      {/* order id */}
      <td>
        <span className="fw-bold">Order Id:32131anbb</span>
      </td>
      {/* price */}
      <td>
        <span className="fw-bold">Total:$25.33</span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">Payment status</span>:success
        </span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">Order Status</span>:delivered
        </span>
      </td>
      <td>
        <span className="fw-bold">
          <span className="text-muted">TranId</span>:43443
        </span>
      </td>
    </tr>
  );
};

export default SingleOrderHistoryItem;
