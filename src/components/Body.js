import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

  const [listOfResturant, setlistOfResturant] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () =>{
    const data = await fetch(
      'https://www.swiggy.com/mapi/homepage/getCards?lat=30.3826105&lng=78.0886934',
    );
    const json = await data.json();
    console.log(json);
    setlistOfResturant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    // setlistOfResturant(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    
  }

  if(listOfResturant.length === 0){
    return <Shimmer />;
  }
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