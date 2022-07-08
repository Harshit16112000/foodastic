import { Redirect, Route, Switch } from 'react-router';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './components/store/CartProvider';
import Footer from './components/Meals/MealItem/Footer'
import Welcome from './components/Pages/Welcome';
import Login from './components/Pages/Login';
import AdminData from './components/Pages/AdminData';
function App() {
  const[cartShown, setCartShown]=useState(false);
  const showCartHandler=()=>{
    setCartShown(true);
  }
  const hideCartHandler=()=>{
    setCartShown(false)
  }
  return (
      <>
    <main>
      <Switch>
      <Route path="/" exact>
      <Redirect to ='/welcome'/>
      </Route>
    <Route path="/welcome">
    <Welcome></Welcome>
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/admin">
    <AdminData/>
    </Route>

      </Switch>
    </main>
     

      {/* <CartProvider>
      
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
       
        <Meals/>
      </main>
      </CartProvider> */}
      <Footer></Footer>
      </>

  );
}

export default App;
