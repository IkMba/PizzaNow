import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantity,
} from "../features/cart/cartSlice";

function UpdateItemButtons({ pizzaId }) {
  const dispatch = useDispatch();

  const itemQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{itemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemButtons;
