import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decrreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId,currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={() =>dispatch(decrreaseItemQuantity(pizzaId))}>-</Button>
           
           <span className="text-sm font-medium">{currentQuantity}</span>
           
            <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
