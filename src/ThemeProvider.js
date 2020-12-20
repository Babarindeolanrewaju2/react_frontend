import React, {useState} from 'react';
import {data} from "./list";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const themeContext = React.createContext()

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light')
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
    toast("item has been removed from cart!",{
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    setCart([...cart.filter(item => item.name !== product.name)])
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

    <themeContext.Provider value={{
      theme,
      list,
      cart,
      basket,
      addtocart: addtocart,
      clearAll: clearAll,
      remove: remove,
    }}>
      {props.children}
      <ToastContainer />
    </themeContext.Provider>
  );
};

export default ThemeProvider;