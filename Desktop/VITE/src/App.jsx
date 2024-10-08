// import { useSelector } from "react-redux"; // 1-chi helper
// import { useDispatch } from "react-redux"; // 2-chi helper

// import { useSelector } from "react-redux";
// import Login from "./components/Login";
// import Profile from "./components/Profile";

// xx

// import { increment, decrement } from "./redux/slices/counter";

// const App = () => {
//   const dispatch = useDispatch(); // useDispatch  increment bn decrementni olib kelish uchun ishlatiladi.
//   const { count } = useSelector((state) => state.counter); // yuzga yuz shu holatda ketadi. birinchi state bizga consfigureStoredagi reducer objni qaytarib beradi.
//   return (
//     <div>
//       <button onClick={() => dispatch(increment())}>+</button>
//       {count}
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   );
// };

// export default App;

// xx

// import { useState } from "react";
// import { useSelector } from "react-redux"; // 1-chi helper
// import { useDispatch } from "react-redux"; // 2-chi helper
// import { addTodo, removeTodo } from "./redux/slices/todo";

// const App = () => {
//   const [value, setValue] = useState("");
//   const dispatch = useDispatch();
//   const { todo } = useSelector((state) => state.todo);
//   return (
//     <div>
//       <input onChange={(e) => setValue(e.target.value)} type="text" />
//       <button
//         onClick={() => {
//           dispatch(addTodo({ title: value, id: Math.random() }));
//         }}
//       >
//         Click
//       </button>
//       {todo?.map((value) => {
//         return (
//           <div key={value.id}>
//             {value.title}
//             <button onClick={() => dispatch(removeTodo(value.id))}>
//               Remove
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <Profile />
//       <Login />
//     </div>
//   );
// }

// export default App;

// react-query

// import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient({
//   /* options */
// });

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <div>블라블라</div>
//       <ReactQueryDevtools buttonPosition={false} />
//     </QueryClientProvider>
//   );
// }

// export default App;

import Navbar from "./navbar";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import History from "./pages/history";
import About from "./pages/about";
import Company from "./pages/about/company";
import Factory from "./pages/about/facture";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="factory" element={<Factory />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
