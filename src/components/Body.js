import RestaurantCard from "./RestaurantCard"
import {resList} from "../Utils/mockData"


const Body = () => {
    return (
      <div className="body-wrapper">
        <div className="search">Search</div>
        <div className="card-wrapper">
          {
            resList.map((restaurant) => (
              <RestaurantCard  resData = {restaurant} key={restaurant.info.id}/> 
            ))
          }
        </div>
      </div>
    );
  };

  export default Body;