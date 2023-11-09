import {CDN_URL} from "../utils/constants";

const ResturantCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData?.info; 
  return(
    <>
    <div className="m-3 p-3 w-[250px] rounded-lg shadow-xl h-50 bg-gray-100 hover:bg-gray-200" >
      <img className="rounded-lg h-[200px] m-auto" src={CDN_URL+cloudinaryImageId } />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
    </>
  );
};

export default ResturantCard;
 
