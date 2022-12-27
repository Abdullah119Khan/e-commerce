import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    message: null,
    errors: null,
  },
  reducers: {
    loginStart: (state, action) => {},
    loginSuccess: (state, action) => {},
    loginFailure: (state, action) => {},
  },
});
