import { createSlice } from '@reduxjs/toolkit';
import { TodoItem } from '../type';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoItem[],
  reducers: {
    addTodo: (state, action) => {
      const newId = state.length > 0 ? Math.max(...state.map((item) => item.id)) + 1 : 1;
      state.push({ id: newId, text: action.payload });
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.findIndex((item) => item.id === id);
      if (todoIndex !== -1) {
        state[todoIndex].text = text;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
