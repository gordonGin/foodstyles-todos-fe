import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    userFormData: {
      password: '',
      name: '',
      email: '',
    },
    error: null,
  },
  reducers: {
    setUserFormDataSuccess: (state, action) => {
      state.userFormData = action.payload;
      state.error = false;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default userReducer.reducer;

export const { setUserFormDataSuccess, setIsAuthenticated, setLoader } =
  userReducer.actions;
