import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // do enable CORS in browser while calling this api to avoid CORS
  const fetchData = async () => {
    console.log("functiondata called");
    // cors proxies
    // https://corsproxy.io/?
    // https://proxy.cors.sh/
    // https://gobetween.oklabs.org/
    // https://corsproxy.org/
    //         "https://thingproxy.freeboard.io/fetch/" +
    // encodeURIComponent(
    //   "https://corsproxy.org/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908136&lng=77.647606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // )

    try {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908136&lng=77.647606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
      );

      const json = await data.json();
      console.log("json", json);
      setRestaurantData(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const searchRestaurants = () => {
    const searchResults = restaurantData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(searchResults);
  };

  const topRestaurants = () => {
    if (!buttonState) {
      const filteredResults = restaurantData.filter(
        (restaurant) => restaurant.info.avgRating >= 4.5
      );
      setFilteredRestaurants(filteredResults);
      setButtonState(!buttonState);
    } else {
      setFilteredRestaurants(restaurantData);
      setButtonState(!buttonState);
    }
  };
  // conditional rendering
  // if(restaurantData && restaurantData?.length === 0) {
  //   return  <Shimmer/>
  // }

  return restaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-wrapper">
      <div className="search-filter-wrapper">
        <input
          type="search"
          className="search"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="search-btn" onClick={searchRestaurants}>
          Search
        </button>
        <button
          className={"filter-btn" + " " + (buttonState ? "selected" : "")}
          onClick={topRestaurants}
        >
          Filter Top rated restaurants
        </button>
      </div>
      <div className="card-wrapper">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
