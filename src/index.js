import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//하나의 component 만을 render해야 함
// App 안에 여러 컴포넌트를 import 해서 사용
