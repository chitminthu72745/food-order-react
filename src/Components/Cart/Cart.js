import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const cartItem = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
const cartItems = (
  <ul className={classes["cart-items"]}>
    {cartItem.map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);
const Cart = (props) => {
  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>5.86</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
