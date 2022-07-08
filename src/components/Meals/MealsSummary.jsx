import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Hot and Tasty Food for you</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        <b>Contact Less Delivery at your door steps!</b>
      </p>
    </section>
  );
};

export default MealsSummary;