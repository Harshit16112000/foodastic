import React from "react";
import { useEffect, useState, useContext } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import OrderIndex from "./OrderIndex";
import Card from "../UI/Card";
import classes from "./AdminData.module.css";
import AuthCredentials from "../store/AuthCredentials";
let orderedid, quantity, itemid, dishname, price, phoneno,customerName,postalcode,phone, address,id;
function AdminData() {
  const authCre = useContext(AuthCredentials);
  const db_url= authCre.db_url;
  const AuthKey= authCre.AuthKey;
  const [destinations, setDestinations] = useState(["0"]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const arr=[];
    const loadedBill = [];
    let food=[];
    const food1=[];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idToken: localStorage.getItem("token"),
      }),
    };

  

     
       
        const fetchDestinations = async () => {
          const url = db_url+"/orders";
          const response = await fetch(
            url + ".json" + '?orderBy="$key"'
          );

          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const responseData = await response.json();

          
        
          for (const key in responseData) {
            arr.push({
              id: key,
              orderedItem: responseData[key].orderedItem,
              user: responseData[key].user,
              totalAmount: responseData[key].totalAmount
            });
          }
         var a="";
          for(var i=0;i<arr.length;i++){
for(var j=0;j<arr[i].orderedItem.length;j++){
      quantity =arr[i].orderedItem[j].amount;
        itemid=arr[i].orderedItem[j].id;
        dishname=arr[i].orderedItem[j].name;
        price=arr[i].orderedItem[j].price;
        food.push(a+(j+1)+ " -> "+" "+"Dish ID: "+ itemid+" | "+"Quantity: "+ quantity+" | "+"Dish: " +dishname+" | "+"Amount: Rs."+price);
        a=" || ";
    }
a="";
food1[i]=food;
food=[];
          }        
for(var i=arr.length-1;i>=0;i--){
  loadedBill.push({
    orderedid:arr[i].id,
    phone:arr[i].user.phone,
    customerName:arr[i].user.name,
    postalcode:arr[i].user.postalCode,
    address:arr[i].user.street,
    food:food1[i],
    totalAmount:arr[i].totalAmount
    
  });
}
 

          setDestinations(loadedBill);
          setIsLoading(false);
        };

        fetchDestinations().catch((error) => {
          setIsLoading(false);
          setHttpError(error.message);
        });
      });
   
  

  // if (isLoading) {
  //   return (
  //     <section className={classes.centered}>
  //       <LoadingSpinner />
  //     </section>
  //   );
  // }
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  const destinationsList = destinations.map((destination) => (
    <OrderIndex
       mid={destination.orderedid}
       customerName={destination.customerName}
      phone={destination.phone}
      postalCode={destination.postalcode}
      street={destination.address}
      quantity={destination.quantity}
      food={destination.food}
      total={destination.totalAmount}
    />
  ));

  return (
    <div>
      <section className={classes.destinations}>
        <div className={classes.row}>
          <div className={classes.column}>
            
          </div>
          <br />
          <div className={classes.column}>
            <Card>
              <Card>
              <h2>Booking History</h2>
              </Card>
              <hr />
              <ul>{destinationsList}</ul>
               <ul>{phone}</ul>
              <ul>{postalcode}</ul>
              <ul>{customerName}</ul>
            </Card>
            {/* <div>{city}</div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminData;
