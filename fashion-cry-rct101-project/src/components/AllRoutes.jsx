

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import  AdminLogin  from '../Admin/AdminLogin'
import { AdminPage } from '../Admin/AdminPage'
import { CartPage } from '../Body/Cartpage'
import Checkout from '../Body/CheckOut'
import { HomePage } from '../Body/HomePage'
import { Payment } from '../Body/Payment'
import { Products } from '../Body/ProductPage'
import {ProductDetail} from '../Body/SingelProDetailsPage'

import PrivateRoute from './PrivateRoute'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/products" element={<Products/> }></Route>
            <Route path="/products/:id" element={<ProductDetail/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
             {/* <Route path="/productdetails/:id" element={<CartPage/>}/> */}
             <Route path='/adminpage' element={ <PrivateRoute> <AdminPage/> </PrivateRoute>  }></Route>
             <Route path='/login' element={<AdminLogin/>}></Route>
            
        </Routes>
    </div>
  )
}
