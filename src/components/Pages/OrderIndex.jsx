import classes from './OrderIndex.module.css';
import Card from '../UI/Card';
const OrderIndex = (props) => {
  return (
    <Card className={classes.destination}>
      <div>
       
        <h3>Order Id: {props.mid}</h3>
        <div>Name: {props.customerName}</div>
        <div>Phone No.: {props.phone}</div>
        <div>PostalCode: {props.postalCode}</div>
        <div>Address: {props.street}</div>
        <div>Order :{props.food}</div>
        <div>Total Amount :&#8377;{props.total}</div>
      </div>
     
    </Card>
  );
};

export default OrderIndex;