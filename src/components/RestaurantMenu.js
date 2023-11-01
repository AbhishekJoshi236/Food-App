import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';


const RestaurantMenu = () => {

  const[resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  // console.log(resId);

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () =>{
    try{
      const data = await fetch(MENU_API + resId);

      const json = await data.json();
      setResInfo(json.data);
      console.log(json.data);
    }catch(error){
      console.log("Error");
    }
  };
  

  if(resInfo === null )    return <Shimmer />;
  const {name,avgRatingString,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRatingString} stars</h3>
        <h3>{costForTwoMessage} stars</h3>
        <ul>
            {itemCards.map(item => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs: {item.card.info.price/100}
              </li>
            ))}
            
        </ul>
    </div>
  );
};

export default RestaurantMenu;