import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from './context/CartContext';
// import { CartProvider } from '.CartContext/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CartProvider>
  <ChakraProvider>

  <Auth0Provider
    domain="dev-ucyoxahmp06h6b82.us.auth0.com"
    clientId="qB7ATLmCTM5tDqTiygFADsoiV0tlesyG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   
    <App />
  
       
</Auth0Provider>
  </ChakraProvider>
  </CartProvider>
   </BrowserRouter>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
