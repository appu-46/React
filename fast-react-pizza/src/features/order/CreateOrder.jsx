import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import EmptyCart from "../cart/EmptyCart";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
// import Input from "../../ui/Input";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
const styles =
  "w-full px-4 py-2 text-sm duration-300 border rounded-full border-stone-300 tranistion-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((state) => state.user.username);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  // console.log(cart);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">{`Ready to order? Let's go!`}</h2>

      {/* <Form method="POST" action ="/order/new"> */}

      <Form method="POST">
        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name </label>
          <input
            placeholder="Enter First Name"
            type="text"
            defaultValue={username}
            name="customer"
            className={styles}
            required
          />
        </div>

        <div className="flex flex-col gap-2 mb-5 grow sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone Number</label>
          <div className="w-full">
            <input
              placeholder="Enter Phone Number"
              type="tel"
              className={styles}
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p className="p-2 mt-3 text-xs text-red-700 bg-red-100 rounded-md">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="w-full">
            <input
              placeholder="Enter Address"
              className={styles}
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
            className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            defaultValue={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalCartPrice + priorityPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your corrent phone number. We might need to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create order and redirect
  const newOrder = await createOrder(order);

  // Do not overuse. This will deactivate performance optimization offered by redux on this page.
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
