import { Redirect, Route, Switch } from 'react-router';
import classes from './Welcome.module.css'
import Header from '../Layout/Header';
import Meals from '../Meals/Meals'
import Cart from '../Cart/Cart';
import { useState } from 'react';
import CartProvider from '../store/CartProvider';
function Welcome() {
  const[cartShown, setCartShown]=useState(false);
  const showCartHandler=()=>{
    setCartShown(true);
  }
  const hideCartHandler=()=>{
    setCartShown(false)
  }
  return (
      <>
     {/* <Route path="/login">
      <Login/>
      </Route> */}

      <CartProvider>
      
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
       
        <Meals/>
      </main>
      </CartProvider>
      {/* <Footer></Footer> */}
      </>

  );
}

export default Welcome;
