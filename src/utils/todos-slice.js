import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [], //Initially there will be empty list
  },
  reducers: {
    create: (state, action) => {
      state.todos.push({ id: uuid()?.slice(0, 8), ...action?.payload }); //Simple pushed the new todo coming from payload to the existing state
    },
    remove: (state, action) => {
      state.todos = state.todos?.filter((todo) => {
        return todo?.id !== action?.payload; //Removed the targeted todo item by filtering it by id from the state array
      });
    },
    update: (state, action) => {
      state.todos = state.todos?.map((item) => {
        if (item?.id === action.payload?.id) {
          return action.payload; // Replace the targeted from the list  todo with todo coming as paylod
        }
        return item;
      });
    },
  },
});

export const { create, remove, update } = todosSlice.actions;

export default todosSlice.reducer;
