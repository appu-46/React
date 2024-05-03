import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../utils/helpers";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalCartPrice = useSelector(getTotalCartPrice);
  console.log(cart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold mt-7">Your cart, {username}</h2>

      <ul className="border-b divide-y border-stone-400 divide-stone-400">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="items-center mt-4 font-bold text-right ">
        Grand Total : {formatCurrency(totalCartPrice)} (Including tax)
      </div>
      <div className="flex items-center mt-6 space-x-2">
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
