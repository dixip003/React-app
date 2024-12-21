import { createSlice } from '@reduxjs/toolkit'

const initialTodos = []

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodos
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        todos: action.payload
      };
    }
  }
});

export const { fetchData } = todoSlice.actions;
export default todoSlice.reducer