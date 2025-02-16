import { formatCurrency } from "../../utilities/helpers";
import Button from '../../ui/Button'
import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "../cart/deleteItem";
import { addItem } from "../cart/cartSlice";
import { getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {

  const dispatch = useDispatch();


  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
console.log(currentQuantity);

const isInCart = currentQuantity > 0;

  function handleAddToCart(){
    console.log(id);
    const newItem = {
      pizzaId: id,
      name,
      quantity:1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem));
  }


  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} className={`h-24 ${soldOut ? 'opacity-70 grayscale': ''}`} alt={name} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
      { isInCart &&
      <div className="flex items-center gap-3 sm:gap-8">
      <UpdateItemQuantity   pizzaId={id} currentQuantity={currentQuantity}></UpdateItemQuantity>
      <DeleteItem pizzaId={id}>

      </DeleteItem>
     </div>}
      { !soldOut && !isInCart && <Button type="small" onClick={handleAddToCart}>Add to Cart</Button>}
       
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
