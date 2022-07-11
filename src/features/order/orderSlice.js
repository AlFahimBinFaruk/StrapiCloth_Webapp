import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";

//initial state
const initialState = {
  myOrderList: [],
  myOrderDetails: null,
  isOrderErrror: false,
  isOrderSuccess: false,
  isOrderLoading: false,
  orderMessage: "",
};

//place order
export const placeNewOrder = createAsyncThunk(
  "order/placeNewOrder",
  async (orderData, thunkAPI) => {
    try {
      //get the token for user ..
      const token = thunkAPI.getState().user.user.jwt;
      return await orderService.placeNewOrder(orderData, token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);

//get my order list
export const getMyOrderList = createAsyncThunk(
  "order/getMyOrderList",
  async (data, thunkAPI) => {
    try {
      let userId = data.userId;
      //get the token for user ..
      const token = thunkAPI.getState().user.user.jwt;
      return await orderService.getMyOrderList(userId, token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);

//get my order details
export const getMyOrderDetails = createAsyncThunk(
  "order/getMyOrderDetails",
  async (data, thunkAPI) => {
    try {
      let orderId = data.orderId;
      //get the token for user ..
      const token = thunkAPI.getState().user.user.jwt;
      return await orderService.getMyOrderDetails(orderId, token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);

//cancel my order
export const cancelMyOrder = createAsyncThunk(
  "order/cancelMyOrder",
  async (data, thunkAPI) => {
    try {
      let orderId = data.orderId;
      //get the token for user ..
      const token = thunkAPI.getState().user.user.jwt;
      return await orderService.cancelMyOrder(orderId, token);
    } catch (error) {
      const orderMessage =
        (error.response &&
          error.response.data &&
          error.response.data.orderMessage) ||
        error.orderMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(orderMessage);
    }
  }
);

//order slice
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.isOrderLoading = false;
      state.isOrderSuccess = false;
      state.isOrderErrror = false;
      state.orderMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeNewOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(placeNewOrder.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.orderMessage = "Order Placed successfully.";
      })
      .addCase(placeNewOrder.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderErrror = true;
        state.orderMessage = action.payload;
      })
      .addCase(getMyOrderList.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(getMyOrderList.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.myOrderList = action.payload.data;
      })
      .addCase(getMyOrderList.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderErrror = true;
        state.orderMessage = action.payload;
        state.myOrderList = null;
      })
      .addCase(getMyOrderDetails.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(getMyOrderDetails.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.myOrderDetails = action.payload.data;
      })
      .addCase(getMyOrderDetails.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderErrror = true;
        state.orderMessage = action.payload;
        state.myOrderDetails = null;
      })
      .addCase(cancelMyOrder.pending, (state) => {
        state.isOrderLoading = true;
      })
      .addCase(cancelMyOrder.fulfilled, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderSuccess = true;
        state.myOrderList = state.myOrderList.filter((order) => {
          if (order._id === action.payload.data.id) {
            return action.payload.data;
          }
        });
      })
      .addCase(cancelMyOrder.rejected, (state, action) => {
        state.isOrderLoading = false;
        state.isOrderErrror = true;
        state.orderMessage = "Failed to cancel order";
      });
  },
});

//export  reset function
export const { reset } = orderSlice.actions;

//export the slice
export default orderSlice.reducer;
