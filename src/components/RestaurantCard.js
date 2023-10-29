import {CDN_URL} from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props.resList);
  const { resList : resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info || {}; // Use an empty object as a fallback

  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        {cloudinaryImageId && (
          <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
        )}
        <h3>{name}</h3>
        <h3>{cuisines && cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla && sla.deliveryTime} mins</h4>
      </div>
    </>
  );
};

export default RestaurantCard;

 
