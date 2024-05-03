import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
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
          <div className="flex items-center gap-2 sm:gap-8">
            {!soldOut && (
              <>
                {isInCart ? (
                  <>
                    <UpdateItemQuantity
                      currentQuantity={currentQuantity}
                      pizzaId={id}
                    />
                    <DeleteItem pizzaId={id} />
                  </>
                ) : (
                  <Button onClick={handleAddToCart} type="small">
                    Add to Cart
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
