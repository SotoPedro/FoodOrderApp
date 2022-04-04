import meals from "../../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ShowModal}) => {
  const showCart = () => {
    ShowModal();
  }
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onOpeninCart={showCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals img" />
      </div>
    </>
  );
};

export default Header;
