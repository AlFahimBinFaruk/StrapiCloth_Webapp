import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

//initial state
const initialState = {
  productList: [],
  productDetails: null,
  isProductError: false,
  isProductSuccess: false,
  isProductLoading: false,
  productMessage: "",
};

//get product list
export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (categoryId, thunkAPI) => {
    try {
      return await productService.getProductList(categoryId);
    } catch (error) {
      const productMessage =
        (error.response &&
          error.response.data &&
          error.response.data.productMessage) ||
        error.productMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(productMessage);
    }
  }
);

//get product details
export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (productId, thunkAPI) => {
    try {
      return await productService.getProductDetails(productId);
    } catch (error) {
      const productMessage =
        (error.response &&
          error.response.data &&
          error.response.data.productMessage) ||
        error.productMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(productMessage);
    }
  }
);

//product slice
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isProductLoading = false;
      state.isProductSuccess = false;
      state.isProductError = false;
      state.productMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isProductLoading = false;
        state.isProductSuccess = true;
        state.productList = action.payload.data;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.isProductLoading = false;
        state.isProductError = true;
        state.productMessage = action.payload;
        state.productList = [];
      })
      .addCase(getProductDetails.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isProductLoading = false;
        state.isProductSuccess = true;
        state.productDetails = action.payload.data;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.isProductLoading = false;
        state.isProductError = true;
        state.productMessage = action.payload;
        state.productDetails = null;
      });
  },
});

//export reset function
export const { reset } = productSlice.actions;

//export the  slice
export default productSlice.reducer;
