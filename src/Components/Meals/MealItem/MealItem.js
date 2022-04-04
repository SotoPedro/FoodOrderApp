import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../../Store/cart-context";

const MealItem = ({ mealName, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const formaPrice = `$${price.toFixed(2)}`

  const addtoCart = (amount) => {
    const item = {
        id: id,
        name: mealName,
        amount: amount,
        price: price
    }

    cartCtx.addItem(item);
  }
  return (
      <li className={classes.meal}>
        <div>
          <h3>{mealName}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{formaPrice}</div>
        </div>
        <div>
          <MealItemForm id={id} onAddtoCart={addtoCart}/>
        </div>
      </li>
  );
};

export default MealItem;
