import axios from "axios";
//api route that i want to call
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/categories`;

//getAllCategoryList
const getAllCategoryList = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

//export all these functions
const categoryService = {
  getAllCategoryList,
};

export default categoryService;
