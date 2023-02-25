

import { createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext();


// import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const  [count,setCount] = useState(0)

  const addToCart = (item) => {
    // e.preventDefault()
    setCart([...cart,item]);
    // console.log(cart)
  };

  const handelCount=(val,id)=>{
    let updatedCart = cart.map(ele => 
      ele.id == id ? {...ele,qty : ele.qty + val} : ele
    );
    
     setCart(updatedCart)
    
  }


  const removeFromCart = (id) => {
    const newCart = cart.filter((ele) => ele.id !== ele.id);
    setCart(newCart);
   
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart ,handelCount}}>
      {children}
    </CartContext.Provider>
  );
};
