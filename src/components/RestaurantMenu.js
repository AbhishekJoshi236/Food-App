import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { ITEM_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {

  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  if(resInfo === null )    return <Shimmer />;

  const {name,avgRatingString,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className='menu'>
        <div className='main-res'>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRatingString} stars</h3>
        <h3>{costForTwoMessage}</h3>
        </div>
        <div className='available-items'>
        <ul className='master-li'>
            {itemCards.map(item => (
              <li key={item.card.info.id} className='food-item'>
                <div className='item-info'>
                  {item.card.info.name}
                  <p>Rs: {item.card.info.price/100}</p>
                </div>
                <img className="item-logo" src={ITEM_URL+item.card.info.imageId } />
              </li>
            ))}
        </ul>
        </div>
    </div>
  );
};

export default RestaurantMenu;