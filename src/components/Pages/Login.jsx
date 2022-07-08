
import React from 'react'
import classes from './Login.module.css'
import { useState, useRef, useContext } from 'react';
import AuthContext from '../store/AuthContext'
import AuthCredentials from '../store/AuthCredentials'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history= useHistory()
  const emailInputRef=useRef()
  const passwordInputRef= useRef()
  const authCtx=useContext(AuthContext)
  const authCre=useContext(AuthCredentials)
  const AuthKey= authCre.AuthKey;
  const [isLogin, setIsLogin] = useState(true);
  
 
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler=(event)=>{
    event.preventDefault()
    const enteredEmail= emailInputRef.current.value;
    const enteredpassword= passwordInputRef.current.value;
    
    if(isLogin){
      
       fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+AuthKey,
       {
        method:'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredpassword,
          returnedSecureToken:true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(res=>{

        if(res.ok){
         
          return res.json()
        } else{
          return res.json().then((data)=>{
             let errorMessage='Authentication Failed';
            
            throw new Error(errorMessage)
          });
        }
      })
      .then((data)=>{
        console.log(data)
        authCtx.login(data.idToken);
        history.replace('/admin')
        const requestOptions={
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            idToken: data.idToken
          })
        }
          
          
          
      })

      .catch((err)=>{
        alert(err.message)
      })
}
    
  
  }
  
 

  return (<>
  
  <div className={classes.admin}>Welcome Admin!</div>
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
       {isLogin && <div className={classes.control}>
          <label htmlFor='email'>Admin Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div> }
       {isLogin && <div className={classes.control}>
          <label htmlFor='password'>Admin Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>}
       
       
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          {!authCtx.isLoggedIn&&
          <Link className={classes.link} to={'/profile'}>Forgot Password </Link>
          }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            
          </button>
        </div>
      </form>
    </section>
  
    
    </>
  );
};


export default Login
