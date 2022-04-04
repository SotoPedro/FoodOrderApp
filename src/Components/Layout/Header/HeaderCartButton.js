import { useContext, useEffect, useState } from "react";
import CartContext from "../../../Store/cart-context";

import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({onOpeninCart }) => {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx; 

  const numItems = items.reduce((currNum, item) => { //we use reduce to create a summatory of all elements
    return currNum + item.amount; //recieve the current number that is passed as a second value, and the current item
  },0)

  const btnClases = `${classes.button} ${isHighlighted ?  classes.bump: ''}`;
  useEffect(() => {
    if(items.length ===0) return;
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return (() => {
      clearTimeout(timer);
    })
  }, [items]);

  const openCart = () => {
    onOpeninCart();
  }

  
  return (
    <button className={btnClases} onClick={openCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};
export default HeaderCartButton;
