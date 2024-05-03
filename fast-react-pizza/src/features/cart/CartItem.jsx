import { useSelector } from "react-redux";
import DeleteItem from "../../ui/DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li
      // key={pizzaId}
      className="py-3 sm:items-center sm:justify-between sm:flex"
    >
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between grow sm:justify-end sm:gap-6">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
