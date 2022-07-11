import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

//initial state
const initialState = {
  categoryList: [],
  isCategoryError: false,
  isCategorySuccess: false,
  isCategoryLoading: false,
  categoryMessage: "",
};

//get all category list
export const getAllCategoryList = createAsyncThunk(
  "category/getAllCategoryList",
  async (_, thunkAPI) => {
    try {
      return await categoryService.getAllCategoryList();
    } catch (error) {
      const categoryMessage =
        (error.response &&
          error.response.data &&
          error.response.data.categoryMessage) ||
        error.categoryMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(categoryMessage);
    }
  }
);

//category slice
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    reset: (state) => {
      state.isCategoryLoading = false;
      state.isCategorySuccess = false;
      state.isCategoryError = false;
      state.categoryMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryList.pending, (state) => {
        state.isCategoryLoading = true;
      })
      .addCase(getAllCategoryList.fulfilled, (state, action) => {
        state.isCategoryLoading = false;
        state.isCategorySuccess = true;
        state.categoryList = action.payload.data;
      })
      .addCase(getAllCategoryList.rejected, (state, action) => {
        state.isCategoryLoading = false;
        state.isCategoryError = true;
        state.categoryMessage = action.payload;
        state.categoryList = [];
      });
  },
});

//export reset function
export const { reset } = categorySlice.actions;

//export the category slice
export default categorySlice.reducer;
