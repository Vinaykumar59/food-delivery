import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, STAR_LOGO, RES_MENU_URL } from "../Utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchDataResMenu();
  }, [id]);

  const fetchDataResMenu = async () => {
    console.log("fetch data called outside");
    try {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/" +
          encodeURIComponent(
            RES_MENU_URL + id +  "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
          )
      );

      // const data = await fetch(
      //   RES_MENU_URL + id +  "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      // );
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.log("error", error);
    }
  };

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
      </div>
    </div>
  );
};

export default RestaurantMenu;
