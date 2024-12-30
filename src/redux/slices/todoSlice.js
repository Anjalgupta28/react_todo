import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    removeTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    updateTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      ),
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
