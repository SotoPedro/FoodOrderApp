import { useReducer } from "react/cjs/react.development";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADDING_ITEM") {
        const updatedTotal = state.totalAmount + (action.item.price * action.item.amount)

        const existInItems = state.items.findIndex((item) => { return item.id === action.item.id});

        const oldItemExist = state.items[existInItems];
        let updatedItems;

        if(oldItemExist) {
            let updateItem = {
                ...oldItemExist,
                amount: oldItemExist.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existInItems] = updateItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        
        return {
            items: updatedItems,
            totalAmount: updatedTotal
        }
    }
    if(action.type === "REMOVE_ITEM") {

        const existInItems = state.items.findIndex((item) => { return item.id === action.id});

        const oldItemExist = state.items[existInItems];
        const updatedAmount = state.totalAmount - oldItemExist.price;
        let updatedItems;
        if(oldItemExist.amount === 1)
        {
            updatedItems = state.items.filter((item)=> item.id !== action.id);            
        }
        else {
            updatedItems = [...state.items];
            updatedItems[existInItems]= { ...oldItemExist, amount: oldItemExist.amount -1};
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    return defaultCartState;
}

const CartContextProvider = ({ children }) => {

    const [Cartstate, dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADDING_ITEM', item: item });
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id});
    }
    const cartContext = {
        items: Cartstate.items,
        totalAmount: Cartstate.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

  return(
    <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
    ); 
};

export default CartContextProvider;