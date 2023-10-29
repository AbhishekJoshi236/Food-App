import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const[filterRestaurant, setFilterRestaurant] = useState(listOfRestaurant);
  const[searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("effect working");
    fetchdata();
  }, []);

  const fetchdata = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4501986&lng=77.3172046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    

    console.log("api data" , json?.data?.cards);
    if(json?.data?.cards.length === 13){
      setlistOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }
    else{

      setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    // setlistOfResturant(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    
  }

  // if(listOfResturant.length === 0){
  //   return <Shimmer />;
  // }
  return (
    <>
    <div className="body">
        <div className="filter">
          
            
            <button onClick={() => {
              
              
              const filterRestaurant = listOfRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
              //setList(filterRestaurant);
              setFilterRestaurant(filterRestaurant);
            }}>Search Button</button>
          </div>
          
          
            <button 
            >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            

            listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resList={restaurant}/>)
            // console.log("list of restaurant", listOfRestaurant)

          }  
           
            
        </div>
    </>
)
};

export default Body;