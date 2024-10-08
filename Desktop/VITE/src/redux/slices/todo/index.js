import { createSlice } from "@reduxjs/toolkit";

// slice folder ochilishi kerak!!
// slice tarjimasi bo'lak bo'lib hamma bulaklar shiuyerda saqlanadi..
// slice folder ichida counter folder -> codelar

// 1- createSlice yozib olis// 2- createSlice ichida 3ta narsa qabul qiladi. -> name, initialState, reducer
// reducer - useReducerni action bn birxil vazifani bajaradi..

const todo = createSlice({
  name: "todo", // name slicelarni nomiga qarab berilad. adashmaslik uchun
  initialState: {
    todo: []
  },
  reducers: {
    // state ->  initialStatedan keyin kelayotgan obj ichini tuliq olb beradi.
    // payload -> qoshayotgan malumotimizni olib kelib beradi. lekin buyerda increm decrem bulgani uchun payload kerak emas.
    // increment: (state, { payload }) => {
    //   state.count += payload;
    // },
    // decrement: (state, { payload }) => {
    //   state.count -= payload;
    // }
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todo.actions; // action bulsa -> reducers ichida yozilgan funclarimizni export qilib yuboradi.
export default todo.reducer; // reducer -> initialStatemizni export qilib beradi.
