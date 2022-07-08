import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css';

const isEmpty= value=> value.trim()==='';
const isSixChars = (value) => value.trim().length === 6;
const isTenChars = (value) => value.trim().length === 10;
const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
      name: true,
      street: true,
      phone: true,
      postalCode: true,
    });
  
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const phoneInputRef = useRef();
  
    const confirmHandler = (event) => {
      // event.preventDefault();
  
      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredPhone = phoneInputRef.current.value;
  
      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredPhoneIsValid = isTenChars(enteredPhone);
      const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);
  
      setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        phone: enteredPhoneIsValid,
        postalCode: enteredPostalCodeIsValid,
      });
  
      const formIsValid =
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredPhoneIsValid &&
        enteredPostalCodeIsValid;
  
      if (!formIsValid) {
        event.preventDefault();
        return;
      }
  
      // Submit cart data
      props.onConfirm({
          name:enteredName,
          phone:enteredPhone,
          postalCode:enteredPostalCode,
          street:enteredStreet
      });
    };
  
    const nameControlClasses = `${classes.control} ${
      formInputsValidity.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
      formInputsValidity.street ? '' : classes.invalid
    }`;
    const postalCodeControlClasses = `${classes.control} ${
      formInputsValidity.postalCode ? '' : classes.invalid
    }`;
    const phoneControlClasses = `${classes.control} ${
      formInputsValidity.phone ? '' : classes.invalid
    }`;
  
    return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef} autoComplete="name" />
          {!formInputsValidity.name && <p style={{color:"red"}}>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor='street'>Address</label>
          <input type='text' id='street' ref={streetInputRef} autoComplete="address"/>
          {!formInputsValidity.street && <p style={{color:"red"}}>Please enter a valid Land Mark!</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor='postal'>PIN Code</label>
          <input type='number' id='postal' ref={postalCodeInputRef} autoComplete='PIN Code'/>
          {!formInputsValidity.postalCode && (
            <p style={{color:"red"}}>Please enter a valid postal code (6 characters long)!</p>
          )}
        </div>
        <div className={phoneControlClasses}>
          <label htmlFor='phone'>Phone No.</label>
          <input type='text' id='phone' ref={phoneInputRef} autoComplete='phone' />
          {!formInputsValidity.phone && <p style={{color:"red"}}>Please enter a valid Phone Number!</p>}
        </div>
        <input type="checkbox" name="COD" checked/>
        <label htmlFor="COD"> Cash on Delivery</label><br />
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
         { <button className={classes.submit}>Confirm</button>}
        </div>
      </form>
    );
  };
  
  export default Checkout;
