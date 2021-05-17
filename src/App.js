import React from 'react';

function Food({ favorite }) {
  return <h2>I like {favorite}</h2>; // favorite 객체 안의 정보: prop를 component를 통해 인자로 받아 보낸다
}

function App() {
  //component HTML을 반환하는 함수
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="Fajita" />
      <Food favorite="Ramen" />
      <Food favorite="Chocolate" />
      <Food favorite="Ice Cream" />
      <Food favorite="Steak" />
      <Food favorite="Burger" />
    </div>
  );
}
//prop : 컴포넌트에게 정보를 주기 위한 것 (attribute 형태)
//컴포넌트는 대문자로 시작해야 함, jsx = html과 javascript의 결합
//위의 favorite은 prop(Food)안의 객체이고 이를 통해 정보를 자식 함수에 보냄
export default App;
