import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'fajita',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Chicken-Fajitas-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767214&s=926a97efc213736e02cdbc2bc0cbd2f9',
    rating: 3,
  },
  {
    id: 2,
    name: 'ice cream',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWqvg87qaMqHwEdeazfn_xcSgz-Eo1z5AAQ&usqp=CAU',
    rating: 5,
  },
  {
    id: 3,
    name: 'sushi',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_e_CRh21r_PAMLCWJCNJWXwGmVLrngpvO-g&usqp=CAU',
    rating: 5,
  },
];
//map: 배열을 받아서 배열을 반환하는 함수
function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>
  ); // favorite 객체 안의 정보: prop를 component를 통해 인자로 받아 보낸다
  // 사용자 접근성을 만족하기 위해 img태그에는 alt prop이 있어야 한다 (시각장애인 용)
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
// 가져오려는 prop의 타입을 정의

function App() {
  //component HTML을 반환하는 함수
  return (
    <div>
      {foodILike.map((food) => (
        <Food
          key={food.id}
          name={food.name}
          image={food.image}
          rating={food.rating}
        />
      ))}
    </div>
  );
}
// 부모 컴포넌트에서 받아오는 prop이 가져오려는 prop과 동일한지 체크할 필요가 있음 ->  prop-types 다운로드
//prop : 컴포넌트에게 정보를 주기 위한 것 (attribute 형태)
//컴포넌트는 대문자로 시작해야 함, jsx = html과 javascript의 결합
//위의 favorite은 prop(Food)안의 객체이고 이를 통해 정보를 자식 함수에 보냄
//key: React의 component는 유일성을 만족해야 하기떄문에 key가 필요 -> function Food에 key를 전달하지 않지만 react 내부적으로 필요
export default App;
