import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {

  const [listOfResturant, setlistOfResturant] = useState(resList);

  return (
    <>
      <div className="body">
        <div className="filter">
          <button 
          className="filter-btn" 
          onClick={() => {
            
            const filteredList = listOfResturant.filter( 
              (res)=> res.info.avgRating >= 4.2
            )
            console.log(filteredList.length); //delete it
            setlistOfResturant(filteredList);            
          }}>
            
            Top rated Resturant</button>
        </div>


        <div className="res-container">
          {
            listOfResturant.map((resturant) =>
              <ResturantCard key={resturant.info.id} resData={resturant} />)
          }
        </div>
      </div>
    </>
  );
};

export default Body;