import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

//get user from localstorage if it exits.
const user = JSON.parse(localStorage.getItem("user"));

//initial state
const initialState = {
  user: user ? user : null,
  isUserErrror: false,
  isUserSuccess: false,
  isUserLoading: false,
  userMessage: "",
};

//register user
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      //pass user to register function from authservice..
      return await userService.register(user);
    } catch (error) {
      const userMessage =
        (error.response &&
          error.response.data &&
          error.response.data.userMessage) ||
        error.userMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(userMessage);
    }
  }
);

//login user
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    //pass user to login function from
    return await userService.login(user);
  } catch (error) {
    const userMessage =
      (error.response &&
        error.response.data &&
        error.response.data.userMessage) ||
      error.userMessage ||
      error.toString();

    return thunkAPI.rejectWithValue(userMessage);
  }
});

//logout user
export const logout = createAsyncThunk("user/logout", async () => {
  //call logout function
  userService.logout();
});

//user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isUserLoading = false;
      state.isUserSuccess = false;
      state.isUserErrror = false;
      state.userMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.isUserSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isUserLoading = false;
        state.isUserErrror = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.isUserSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isUserLoading = false;
        state.isUserErrror = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

//export user slice reset function
export const { reset } = userSlice.actions;

//export the user slice
export default userSlice.reducer;
