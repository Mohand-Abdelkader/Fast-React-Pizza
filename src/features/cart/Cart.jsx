/* eslint-disable no-unused-vars */
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { clearCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
