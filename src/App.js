/* eslint-disable no-undef */

import './App.css';
import {data} from "./list";
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Cart";
import Home from "./Home";

function App() {
  const [list, setList] = useState(data);
  const [cart, setCart] = useState([]);
  const [basket, setBasket] = useState('');

    const sumItems = cartItems => {
        let subTotal = 0;
        let itemCount = cartItems.reduce((total, product) => total += product.quantity, 0);
        let total = cartItems.reduce((total, product) => total + parseInt(product.sum), 0);
        setBasket({itemCount,subTotal, total})
    }

  const addtocart = (item) => {
      toast("added to the cart!",{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

      let tempCart = [...cart];
      let tempItem = tempCart.find(product => product.name === item.name);
      if (!tempItem) {
        let sum = item.price;
        let cartItem = { ...item, quantity: 1, sum };
        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.quantity++;
        tempItem.sum = tempItem.price * tempItem.quantity;
        tempItem.sum = parseFloat(tempItem.sum.toFixed(2));
      }
  
      setCart([...tempCart]);
          console.log(cart)
      };

  const remove = (product) =>{
    setCart([...cart.filter(item => item.name !== product.name)],setBasket({...sumItems(cart)}))
  }

  const clearAll = () =>{
    toast("cart has been cleared!",{
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    setCart([])
  }

  useEffect(() => {
    sumItems(cart)
  }, [cart])
  
  return (
    <div className="App0">
      <h1>Home products</h1>
      <div className="cart">
      <h4>{list.length} {"  "}products</h4>
      {cart.length <= 0 ? <h4>No cart item</h4> : <h4>{basket.itemCount} products</h4>} 
      </div>
     <p onClick={clearAll}>clear cart</p>
     <Home list={list} addtocart={addtocart}/>
     <Cart cart={cart} remove={remove} basket={basket}/>
    <ToastContainer />
    </div>
  );
}

export default App;
