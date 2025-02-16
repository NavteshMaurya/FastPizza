import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;
  
  return (
    <div className="bg-stone-800 text-white-200 px-4 py-4 sm:px-6 uppercase flex items-center justify-between text-stone-200 text-sm md:text-base">
      <p className="space-x-4  text-stone-300 font-semibold sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
