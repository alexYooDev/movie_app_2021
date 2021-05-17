import React from 'react';

function Food({ name, image }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image}></img>
    </div>
  ); // favorite 객체 안의 정보: prop를 component를 통해 인자로 받아 보낸다
}

const foodILike = [
  {
    name: 'fajita',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Chicken-Fajitas-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767214&s=926a97efc213736e02cdbc2bc0cbd2f9',
  },
  {
    name: 'ice cream',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWqvg87qaMqHwEdeazfn_xcSgz-Eo1z5AAQ&usqp=CAU',
  },
  {
    name: 'sushi',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_e_CRh21r_PAMLCWJCNJWXwGmVLrngpvO-g&usqp=CAU',
  },
];
//map: 배열을 받아서 배열을 반환하는 함수
function App() {
  //component HTML을 반환하는 함수
  return (
    <div>
      {foodILike.map((food) => (
        <Food name={food.name} image={food.image} />
      ))}
    </div>
  );
}
//prop : 컴포넌트에게 정보를 주기 위한 것 (attribute 형태)
//컴포넌트는 대문자로 시작해야 함, jsx = html과 javascript의 결합
//위의 favorite은 prop(Food)안의 객체이고 이를 통해 정보를 자식 함수에 보냄
export default App;
