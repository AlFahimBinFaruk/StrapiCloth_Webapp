const PaymentSuccessful = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h5 className="text-success">payment success!</h5>
        <p className="fw-bold">your stripe payment was successful.</p>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
