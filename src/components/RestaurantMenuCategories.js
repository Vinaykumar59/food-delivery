// import { useState } from "react"
import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenuCategories = ({ data, showItems, setShowIndex, closeItems }) => {
  const itemCards = data?.card?.card?.itemCards;
//   const [showItems, setSHowItems] = useState(false);

  const toggleItems = () => {
    setShowIndex();
    if(showItems) {
        closeItems();
    }
  };

  return (
    <div className="category   border-b-gray-300 border-b-2  my-4 ">
      <div className="shadow-md my-4 ">
        <div
          className="flex justify-between align-middle p-2 my-2  cursor-pointer bg-slate-200"
          onClick={toggleItems}
        >
          <span>{data?.card?.card?.title}</span>
          <span>⬇️</span>
        </div>
        <div>
          {showItems &&
            itemCards.map((itemcard) => (
              <RestaurantMenuItems itemcard={itemcard} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCategories;
