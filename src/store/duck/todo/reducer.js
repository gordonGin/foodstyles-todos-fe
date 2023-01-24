import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
  name: 'todo',
  initialState: {
    isLoading: true,
    todos: [],
    error: null,
  },
  reducers: {
    setTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    setTodosFailure: (state, action) => {
      state.error = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default todoReducer.reducer;

export const { setTodosSuccess, setTodosFailure, setLoader } =
  todoReducer.actions;
