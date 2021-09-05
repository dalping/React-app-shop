import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Provider} from 'react-redux';
import { createStore } from 'redux';


let init = [
  { id : 1, name : "마카롱", quan:1, price : 15000 },
  { id : 2, name : "딸기쿠키", quan:2, price : 10000 }
];
 
function reducer(state = init, action){

  let copy = [...state]; //deep copy
  let data = copy.find( a => a.id === action.id);
 
  switch(action.type){
    case 'add':
      data.quan++;
      return copy
    case 'minus':
      data.quan--;
      return copy
    default:
      return copy
  }

  }

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
