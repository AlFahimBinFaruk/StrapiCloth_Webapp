import axios from "axios";
//api route that i want to call
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/products`;

//getProductList
const getProductList = async (categoryId) => {
  const response = await axios.get(
    `${API_URL}?filters[category][id][$in][0]=${categoryId}&populate=thumbnail`
  );
  return response.data;
};

//getProductDetails
const getProductDetails = async (productId) => {
  const response = await axios.get(`${API_URL}/:${productId}?populate=*`);
  return response.data;
};

//export all these functions
const productService = {
  getProductList,
  getProductDetails,
};

export default productService;
