import { useContext } from "react/cjs/react.development";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({onCloseModal}) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemAmount = (item) => {
        cartCtx.addItem({...item,amount: 1})
    }

    const removeItemAmount = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map((item) => {
            return <CartItem 
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={addItemAmount.bind(null,item)}
                onRemove={removeItemAmount.bind(null, item.id)}
            />
        })
    }</ul>
    
    return (
        <Modal onCloseBackdrop={onCloseModal}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onCloseModal}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;