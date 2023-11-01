import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () =>{
    try{
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
      );
      const json = await data.json();
      console.log("json");
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      setlistOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
      setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    
    }catch(error){
      console.log("Error");
    }
  }

  // console.log("checking: " + listOfResturant.length);

  if (listOfResturant === 0) {
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
            
            console.log("top rated clicked");
            const filteredList = listOfResturant.filter( 
              (res)=> res.info.avgRating >= 4.0
            ) 
            setFilteredRestaurant(filteredList);            
          }}>
            
            Top rated Resturant
          </button>
        </div>

        <div className="res-container">
          {  
            filteredRestaurant.map( (res) => {
              return <Link 
                key={res.info.id}
                to={"/restaurants/" +res.info.id} style={{ color: 'inherit', textDecoration: 'none'}}> 
                <ResturantCard  resData={res} /> 
              </Link>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Body;