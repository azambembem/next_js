// import { createSlice } from "@reduxjs/toolkit";

// // slice folder ochilishi kerak!!
// // slice tarjimasi bo'lak bo'lib hamma bulaklar shiuyerda saqlanadi..
// // slice folder ichida counter folder -> codelar

// // 1- createSlice yozib olis// 2- createSlice ichida 3ta narsa qabul qiladi. -> name, initialState, reducer
// // reducer - useReducerni action bn birxil vazifani bajaradi..

// const counter = createSlice({
//   name: "counter", // name slicelarni nomiga qarab berilad. adashmaslik uchun
//   initialState: {
//     count: 0
//   },
//   reducers: {
//     // state ->  initialStatedan keyin kelayotgan obj ichini tuliq olb beradi.
//     // payload -> qoshayotgan malumotimizni olib kelib beradi. lekin buyerda increm decrem bulgani uchun payload kerak emas.
//     // increment: (state, { payload }) => {
//     //   state.count += payload;
//     // },
//     // decrement: (state, { payload }) => {
//     //   state.count -= payload;
//     // }

//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     }
//   }
// });

// export const { increment, decrement } = counter.actions; // action bulsa -> reducers ichida yozilgan funclarimizni export qilib yuboradi.
// export default counter.reducer; // reducer -> initialStatemizni export qilib beradi.
