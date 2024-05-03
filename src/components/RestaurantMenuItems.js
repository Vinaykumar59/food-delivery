import { CDN_URL } from "../Utils/constants";
// useDispatch is a react hook to dispatch an event for store operation in redux
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/cartSlice";
import { useLocation } from "react-router-dom";

const RestaurantMenuItems = ({ itemcard }) => {
  console.log("itemcard", itemcard);

  // useLocation() is used to get current location/route path --> this returns a object, which contains pathname
  const router = useLocation();
  console.log("routerpath", router);
  const dispatch = useDispatch();

  const addItemsHandler = (itemcard) => {
    dispatch(addItem(itemcard));
  };

  const RemoveItem = (itemcard) => {
    dispatch(removeItem(itemcard))
  }

  return (
    <div>
      <div
        className="m-2 p-2 border-b-2 flex justify-between"
        key={itemcard.card?.info?.id}
      >
        <div className="w-9/12">
          <p>{itemcard.card?.info?.name}</p>
          <p>
            ₹
            {itemcard.card?.info?.price / 100 ||
              itemcard.card?.info?.defaultPrice / 100}
          </p>
          <p className="font-normal text-xs">
            {itemcard.card?.info?.description}
          </p>
        </div>
        <div className=" h-40 box-border w-6/12 flex justify-end relative">
          <img
            src={CDN_URL + itemcard.card?.info?.imageId}
            className="h-full w-10/12"
          />
          {router.pathname !== "/cart" && (
            <button
              className="absolute bg-white text-black p-1 rounded-lg bottom-1 right-12"
              onClick={() => addItemsHandler(itemcard)}
            >
              Add +
            </button>
          )}
          {router.pathname === "/cart" && (
            <button
              className="absolute bg-white text-black p-1 rounded-lg bottom-1 right-12"
              onClick={() => RemoveItem(itemcard)}
            >
              Remove Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuItems;
