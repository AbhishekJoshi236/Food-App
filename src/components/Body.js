import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () =>{
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4501986&lng=77.3172046&page',
    );
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setlistOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (listOfResturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button onClick={()=>{
              
              const filteredRestaurant = listOfResturant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase() )
              );

              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
          </div>

          <button 
          className="filter-btn" 
          onClick={() => {
            
            const filteredList = listOfResturant.filter( 
              (res)=> res.info.avgRating >= 3.9
            ) 
            setlistOfResturant(filteredList);            
          }}>
            
            Top rated Resturant
          </button>
        </div>

        <div className="res-container">
          {
            filteredRestaurant.map((res) =>
              <ResturantCard key={res.info.id} resData={res} />)
          }
        </div>
      </div>
    </>
  );
};

export default Body;