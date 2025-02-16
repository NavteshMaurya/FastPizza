import DeleteItem from "../cart/DeleteItem";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));


  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-center ">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}></UpdateItemQuantity>
      <DeleteItem pizzaId={pizzaId}></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
