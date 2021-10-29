import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
// let nav = document.getElementById('nav');
let back = document.getElementById('back');
let front = document.getElementById('front');
let stars = document.getElementById('stars');
let laptop = document.getElementById('laptop');
let btn = document.getElementById('btn');
let heading = document.getElementById('heading');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  // nav.style.top = value * 0.5 + 'px';
  laptop.style.left = value * 0.245 + 'px';
  stars.style.top = value * 0.45 + 'px';
  back.style.left = value * .765 + 'px';
  front.style.right = value * 0.25 + 'px';
  heading.style.top = value * -0.5 + 'px';
  btn.style.marginTop = value * .4 + 'px';
})

*/