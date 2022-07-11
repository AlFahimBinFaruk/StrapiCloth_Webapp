import axios from "axios";
//api route that i want to call
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/orders`;

//placeNewOrder
const placeNewOrder = async (orderData, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}`, { data: orderData }, config);
  return response.data;
};

//getMyOrderList
const getMyOrderList = async (userId, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `${API_URL}?filters[userId]=${userId}`,
    config
  );
  return response.data;
};

//getMyOrderDetails
const getMyOrderDetails = async (orderId, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/${orderId}`, config);
  return response.data;
};

//getMyOrderDetails
const cancelMyOrder = async (orderId, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  //order data
  let orderData = {
    data: {
      orderStatus: "canceled",
    },
  };
  const response = await axios.put(`${API_URL}/${orderId}`, orderData, config);
  return response.data;
};

//export all these functions
const orderService = {
  placeNewOrder,
  getMyOrderList,
  getMyOrderDetails,
  cancelMyOrder,
};

export default orderService;
