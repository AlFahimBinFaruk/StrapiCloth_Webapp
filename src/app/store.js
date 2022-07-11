import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product/productSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    order: orderReducer,
    product: productReducer,
    user: userReducer,
  },
});
