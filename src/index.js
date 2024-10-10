import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// var lastScrollTop = 0 

// let navbar= document.getElementsByClassName("navbar");
// window.addEventListener("scroll",()=>{

//     var scrollTop = Window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         navbar.style.top="-80px";
//     }
//     else{
//         navbar.style.top="0px"
//     }
// })

reportWebVitals();
