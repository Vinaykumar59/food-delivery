import {STAR_LOGO, CDN_URL} from "../Utils/constants"

const cardStyle = {
    borderLeft: "solid 1px #B1B1B1"
};


const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating, costForTwo, cuisines, locality} = resData.info;
     return (
       <div className="res-card-wrapper" style={cardStyle}>
         <img
           src={CDN_URL + cloudinaryImageId}        className="res-logo"
           alt="res-logo"
         />
         <div className="res-details">
           <h3 className="res-name">{name}</h3>
           <div className="res-rating-wrapper">
             <img
               src={STAR_LOGO}
               alt="star"
               className="star"
             />
             <p className="res-rating">{avgRating} stars</p>
             <p className="res-delivery-time">{resData.info.sla.slaString}</p>
           </div>
           <p className="res-cost">{costForTwo}</p>
           <p className="res-cuisine">{cuisines.join(", ")}</p>
           <p className="res-location">{locality}</p>
         </div>
       </div>
     );
   };
   
export default RestaurantCard;