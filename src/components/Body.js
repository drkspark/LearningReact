import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurantData, setRestarauntData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0126517&lng=77.0017465&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // We need to use: Optional Chaining
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        setRestarauntData(json?.data?.cards[2]?.data?.data?.cards);
    };

    function getTopRated() {
        const resData = resList.filter(
            (restaurant) => restaurant.data.avgRating > 4.0
        );
        setRestarauntData(resData);
    }

    function getLowRated() {
        const resData = resList.filter(
            (restaurant) => restaurant.data.avgRating < 4.0
        );
        setRestarauntData(resData);
    }

    /**
     *  When the data is being Fetched we need to show something....
     *  What should we show?? =>> Loading Spinner ? Nopes that's not relevant nowadays
     *? We will be showing a SHIMMER UI
     *  It's kind of showing fake cards or Skelton UI
     */

    return restaurantData.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <button className='top-rated' onClick={getTopRated}>
                Top Rated Restraunts
            </button>
            <button className='low-rated' onClick={getLowRated}>
                Low Rated Restraunts
            </button>
            <div className='res-container'>
                {restaurantData.map((restraunt) => (
                    <RestaurantCard
                        key={restraunt.data.id}
                        resData={restraunt.data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
