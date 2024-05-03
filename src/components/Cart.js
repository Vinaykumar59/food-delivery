import { useSelector } from "react-redux";
import RestaurantMenuItems from "./RestaurantMenuItems";
import { useDispatch } from "react-redux";
import { clearcart } from "../Utils/cartSlice";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log("storeitems", items);
    console.log( )
  const dispatchCart = useDispatch();

  const clearCartHandler = () => {
    console.log('clear cliked');
    dispatchCart(clearcart());
  };

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="flex gap-5">
        <h1 className="m-2 p-2 font-bold ">Cart Items</h1>
        {items.length !== 0 && (
          <button
            className="m-2 p-2 rounded-lg bg-black text-white"
            onClick={clearCartHandler}
          >
            Clear cart
          </button>
        )}
      </div>
      {items.length === 0 ? (
        <h3>Your cart is empty , Please add items to proceed</h3>
      ) : (
        ""
      )}
      <div className="w-9/12">
        {items.map((item) => (
          <RestaurantMenuItems itemcard={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
