import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./utils/todos-slice"; //tmported todo slice

const store = configureStore({
  reducer: {
    todos: todosReducer, //Added the slice created for todo list
  },
});

export default store;
