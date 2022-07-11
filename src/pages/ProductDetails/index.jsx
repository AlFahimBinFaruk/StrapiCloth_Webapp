import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ColorCircle from "../../common_components/ColorCircle";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import SizeBox from "../../common_components/SizeBox";
import { getProductDetails, reset } from "../../features/product/productSlice";
import ServerError from "../Error/ServerError";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import { useGlobalCartInfoContext } from "../../contexts/cartContext";
const ProductDetails = () => {
  const { productId } = useParams();
  //cart info context
  const { addToCart } = useGlobalCartInfoContext();
  //alert context
  const { setShowAlert } = useGlobalAlertContext();
  //selected color
  const [selectedColor, setSelectedColor] = useState("None");
  //selected size
  const [selectedSize, setSelectedSize] = useState("None");
  //selector
  const { productDetails, isProductLoading, isProductError } = useSelector(
    (state) => state.product
  );
  //destructure product details
  let { id, attributes } = productDetails || false;
  let {
    title,
    category,
    description,
    price,
    thumbnail,
    availQty,
    size,
    color,
  } = attributes || false;
  //color arr
  let colorArr = color?.split(",");
  //size arr
  let sizeArr = size?.split(",");
  //dispatch
  const dispatch = useDispatch();
  //add to cart
  const handleAddToCart = () => {
    if (selectedColor === "None" || selectedSize === "None") {
      setShowAlert({ msg: "provide all info", color: "success" });
    } else {
      addToCart(id, selectedColor, selectedSize, thumbnail.data.attributes.url);
    }
  };

  //get all product when the page load
  useEffect(() => {
    if (productId) {
      dispatch(getProductDetails(productId));
    }
    return () => {
      dispatch(reset());
    };
  }, [productId, dispatch]);
  //loading
  if (isProductLoading) {
    return <LoadingSpinner />;
  }

  //error
  if (isProductError) {
    return <ServerError />;
  }
  return (
    <div className="product-details">
      {productDetails && (
        <MDBRow className="align-items-center justify-content-center vh-100">
          {/* left */}
          <MDBCol size="12" md="6" lg="4">
            <img
              src={thumbnail.data.attributes.url}
              alt=""
              className="border border-warning rounded"
              height={400}
            />
          </MDBCol>
          {/* right */}
          <MDBCol size="12" md="6" lg="4">
            <h5 className="title">{title}</h5>
            <p className="desc">
              <small>{description}</small>
            </p>
            <h6 className="category">
              <span className="text-muted">Category</span>:
              {category.data.attributes.title}
            </h6>
            <h6 className="price">${price}</h6>
            <h6 className="availQty">
              <span className="text-muted">Available Qty</span>:{availQty}
            </h6>
            <div className="size mt-3">
              <h6>
                <span className="text-muted">Selected Size</span> :
                {selectedSize}
              </h6>
              <p className="available-sizes">
                {sizeArr &&
                  sizeArr.map((i) => {
                    return (
                      <span onClick={() => setSelectedSize(i)}>
                        <SizeBox size={i} />
                      </span>
                    );
                  })}
              </p>
            </div>
            <div className="color mt-3">
              <h6>
                <span className="text-muted">Selected Color</span>:
                {selectedColor}
              </h6>
              <p className="available-colors">
                {colorArr &&
                  colorArr.map((i) => {
                    return (
                      <span onClick={() => setSelectedColor(i)}>
                        <ColorCircle color={i} />
                      </span>
                    );
                  })}
              </p>
            </div>
            {/* add to cart btn */}
            <MDBBtn onClick={handleAddToCart}>Add to cart</MDBBtn>
          </MDBCol>
        </MDBRow>
      )}
    </div>
  );
};

export default ProductDetails;
