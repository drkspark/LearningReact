import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

// Hook => It's just a special function with specific properties which are very useful
const Body = () => {
    const [restaurantData, setRestarauntData] = useState([]);
    /**
     *
     * Syntax: useEffect(callBack Function, Dependency Array)
     * callBack Function: This will be called
     * Dependency Array: Decides when this callBack function has to be called i.e Triggers
     *
     * ! When is the useEffect() called?
     * - Once the whole component is loaded, then the useEffect is called
     */

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0126517&lng=77.0017465&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json.data.cards[2].data.data.cards);
        
        // We need to use: Optional Chaining 
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
    return (
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
