import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        mealName={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
