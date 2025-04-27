/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, DecreaseItemQuantity } from "./cartSlice.js";

function UpdateItemQuantity({ pizzaId, currQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        onClick={() => dispatch(DecreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      <span className="text-sm font-bold">{currQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
