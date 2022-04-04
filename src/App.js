import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart';
import { useState } from "react";
import CartContextProvider from "./Store/CartProvider";

function App() {
  const[disabled, setDisabled] = useState(true);

  const onShowCart = () => {
    setDisabled(() => {return !disabled});
  }
  return (
    <CartContextProvider>
      {!disabled && <Cart onCloseModal={onShowCart}/>}
      <Header ShowModal={onShowCart}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
