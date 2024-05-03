import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, STAR_LOGO } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  // const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  const {
    avgRatingString,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    locality,
    name,
    totalRatingsString,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const resOffers =
    resInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers ||
    {};

  const categorydata =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const categories = categorydata?.filter(
    (cardele) =>
      cardele.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const online = useOnlineStatus();

  if (!online)
    return (
      <h1>
        !OOPS looks like you are offline. Please check your Internet connection{" "}
      </h1>
    );

  if (!resInfo) return <Shimmer />;

  return (
    <div className="res-menu-outer-wrapper">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
        alt="res-logo"
      />
      <h1 className="res-name"> {name} </h1>
      <div className="res-card-outer-wrapper">
        <div className="rating-wrapper">
          <p className="res-rating">
            <img src={STAR_LOGO} alt="star" className="star" />
            {avgRatingString}({totalRatingsString})
          </p>
          <p className="cost-for-two"> {costForTwoMessage} </p>
        </div>
        <h3 className="res-cuisine">{cuisines.join(",")}</h3>
        <p className="location">
          {locality}
          {city}
        </p>
      </div>
      <div className="res-offers">
        <p className="deals-title">Deals For you</p>
        <div className="offers-wrapper">
          {resOffers.map((offer) => (
            <div className="offers" key={offer.info.restId}>
              <p className="offer-detail">{offer.info.header}</p>
              <p className="offer-coupon">coupon : {offer.info.couponCode}</p>
              <p className="offer-criteria">{offer.info.description}</p>
            </div>
          ))}
        </div>
        <div className="res-categories-wrapper">
          {categories.map((category, index) => (
            <RestaurantMenuCategories
              data={category}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              closeItems={() =>setShowIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
