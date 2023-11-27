import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info;
  return (
    <>
      <div className="m-3 w-[220px] min-h-[300px] shadow-xl  rounded-lg bg-gray-200 hover:bg-gray-300" >
        <div className="">
          <img className="m-auto max-h-[180px] min-h-[180px] rounded-lg" src={CDN_URL + cloudinaryImageId} />
        </div>

        <div className="px-3">
          <h3 className="font-bold pt-2 text-lg">{name}</h3>
          <h3 className="font-semibold colour">{"🌟"} {avgRating} {"•"} {sla.deliveryTime} mins</h3>
          <h3></h3>
          <h3 className="p-1 ">{cuisines.slice(0, 4).join(", ")}</h3>
        </div>

      </div>
      

    </>
  );
};

// Higher Order Component
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    const { resData } = props;

    const meta = resData.info.aggregatedDiscountInfoV3;
    return <div>
      <label className="absolute bg-black text-white rounded-lg p-2 font-semibold">
        {meta.header} {meta.subHeader}
      </label>
      <ResturantCard {...props} />
    </div>
  }
}

export default ResturantCard;

