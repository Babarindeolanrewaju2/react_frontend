/* eslint-disable no-undef */

import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import { Link } from "react-router-dom";
import {useContext} from 'react';
import { themeContext } from './ThemeProvider';


function App() {
  const {list, clearAll, basket} = useContext(themeContext)
  
  return (
    <div className="App0">
      <h1>Home products</h1>
      <div className="cart">
      <h4>{list.length} {"  "}products</h4>
      <Link to={{ pathname: '/cart'}}>{basket.itemCount <= 0 ? <h4>No cart item</h4> : <h4>{basket.itemCount} products</h4>} </Link>
      </div>
     <p onClick={clearAll}>clear cart</p>
     <Home/>

    </div>
  );
}

export default App;
