// State의 변화  -> 랜더링 -> 컴포넌트 내부 변수들 초기화
// Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
// State의 변화 -> 렌더링 -> 그대로 Ref의 값은 유지됨

// Ex: 1
// import React, { useState, useRef } from "react"; // useRef import qilish
// const useReff = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0); // create qilish yo'li

//   console.log(countRef); // countRef ichida nima borligini korish uchun. countRef ichida current bor. Davomi pastda
//   // current => useRef(0) ni olib turibti. current kirish uchun countRef. current orqali kiriladi.

//   console.log("==렌더링=="); // clikc bulganda consoleda render bulgandi.

//   const incereaseCountState = () => {
//     setCount(count + 1); // useState orqali count bitta bitta increase buladi.
//   };

//   const incereaseCountRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log(countRef); // countRef ichida nima borligini korish uchun. current orqali kiriladi.
//     console.log("Ref:", countRef.current); //
//   };

//   return (
//     <div>
//       <p>State: {count}</p>
//       <p>Ref: {countRef.current}</p>
//       <button onClick={incereaseCountState}>State 올려</button>
//       <button onClick={incereaseCountRef}>Ref 올려</button>
//     </div>
//     //1. State 올려 botton ni click qilganda ekran render boladi va consolda ham chiqadi.
//     //2. lekin Ref 올려 botton ni bosganda ekran render bulmaydi.
//     //3. Ref 올려 botton ni bosib bulgandan keyin State 올려 botton ni bossa Ref 올려 boya nechi sira bosilgan bulsa shuncha render bulib korinadi.
//   );
// };

// export default useReff;

// Ex:2

import React, { useState, useRef } from "react";

const RefEx2 = () => {
  const [renderer, serRenderer] = useState(0); // var bn ref ni render qilish uchun create qilindi.
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    serRenderer(renderer + 1);
  };

  const inceaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref:", countRef.current); // ref click qilishda bitta bitta kopayishini consoleda korish mumkin.
  }; // lekin var bn ref ni ikkalasi ham render bulmasi tufayli useState yaratiladi.

  const inceaseVar = () => {
    countVar = countVar + 1;
    console.log("var:", countVar); // var ni ham click qilishda bitta bitta kopayishini consoleda korish mumkin.
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더~!</button>
      <button onClick={inceaseRef}>Ref: 올려</button>
      <button onClick={inceaseVar}>Var: 올려</button>
    </div>
    // 1. Ref: 올려 ni 3 sira bosib Var: 올려 ni ikki sira va 렌더~! nin bosgandan keyin Ref: 3 bolib qoladi, lein var 0ga tushib qoladi! Davomi pastda
    // chhunki ref render bulganda ham o'z holadtini saqlaydi. oddiy var bundan mustasno
  );
};

export default RefEx2;
