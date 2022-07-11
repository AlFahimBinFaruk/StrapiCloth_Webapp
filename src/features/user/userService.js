import axios from "axios";
//api route that i want to call
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/auth/local`;

//register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  //if we get data in response we will save it to localstorage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}`, userData);
  //if we get data in response we will save it to localstorage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
};

//export all these functions
const userService = {
  register,
  login,
  logout,
};

export default userService;
