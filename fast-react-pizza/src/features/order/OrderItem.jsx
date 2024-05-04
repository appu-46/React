import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="px-6 py-2">
      <div className="flex flex-row items-center justify-between gap-4 space-y-2">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm italic capitalize text-stone-500">
        {isLoadingIngredients ? "loading..." : `${ingredients}`}
      </p>
    </li>
  );
}

export default OrderItem;
