import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-60 grayscale hover:cursor-not-allowed" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex justify-between mt-auto item-center">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500 hover:cursor-not-allowed">
              Sold out
            </p>
          )}
          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
