import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./cart.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/reducer";
import { calcualtion, decrement, addToCart } from "../../redux/reducer";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const { cartItems, subTotal, tax, shiping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const dec = (e) => {
    dispatch(calcualtion());
    dispatch(decrement(e));
  };
  const add = (e) => {
    dispatch(addToCart(e));
    dispatch(calcualtion());
  };

  const deleteItem = (e) => {
    dispatch(deleteProduct(e));
    dispatch(calcualtion());
  };

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <>
          <div className="cart-left">
            {cartItems.map((e) => {
              return (
                <div key={e.e.id} className="cart-card">
                  <div className="cart-img">
                    <img src={e.e.image} alt="" />
                  </div>
                  <div className="name-price">
                    <p>{e.e.title}</p>
                    <p>price : ${e.e.price}</p>
                  </div>
                  <div className="counter">
                    <button onClick={() => dec(e)}>-</button>
                    <span>{e.quantity}</span>
                    <button onClick={() => add(e)}>+</button>
                  </div>
                  <AiFillDelete onClick={() => deleteItem(e)} />
                </div>
              );
            })}
          </div>
          <div className="total">
            <div className="total-card">
              <p>subtotal : $ {subTotal}</p>
              <p>shiping : $ {shiping}</p>
              <p>tax : $ {tax}</p>
              <p>total : $ {total}</p>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
