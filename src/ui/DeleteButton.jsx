import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
