import React from 'react';
// import ProductList from './features/product-list/ProductList';
import Home from './pages/Home'
// import {counter} from './features/counter/Counter'
import './App.css';
import LoginPage from './pages/Login';
import Signup from './pages/Signup';
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom';
import Cart from './features/cart/Cart';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/login',
    element:<LoginPage></LoginPage>
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/cart',
    element:<Cart></Cart>
  }

])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
