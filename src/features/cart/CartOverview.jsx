import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalCartQuantity === 0) {
    return null;
  }
  return (
    <div className="flex items-center justify-between px-4 py-4 uppercase sm:px-6 bg-stone-800 text-stone-200">
      <p className="space-x-4 text-sm font-semibold md:text-base text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open Cart</Link>
    </div>
  );
}

export default CartOverview;
