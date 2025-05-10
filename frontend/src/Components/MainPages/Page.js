import React from 'react';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Register from './Login/Register';
import Login from './Login/Login';
import {Routes , Route} from 'react-router-dom';
import DetailProduct from './utils/DetailProduct/DetailProduct';

const Page = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Products/>}/>
      <Route path = '/' element = {<Products/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
      <Route path = '/cart' element = {<Cart/>}/>
      <Route path = '/detail/:id' element = {<DetailProduct/>}/>
    </Routes>
  )
}

export default Page