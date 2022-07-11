import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
const CheckoutForm = () => {
  return (
    <div className="checkout-form my-5">
      <h5 className="mb-3">Please provide all the checkout info.</h5>
      <div>
        <MDBInput
          id="form4Example1"
          wrapperClass="mb-2"
          label="Name"
          size="sm"
        />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-2"
          label="Email address"
          size="sm"
        />
        <MDBTextArea label="Address" id="textAreaExample" rows={4} size="sm" />
        <h6 className="text-muted mt-3">
          Payment type:<span className="text-dark ms-1">COD</span>
        </h6>
      </div>
    </div>
  );
};

export default CheckoutForm;
