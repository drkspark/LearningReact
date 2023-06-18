import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [apiData, setApiData] = useState([]);
    const [restaurantData, setRestarauntData] = useState([]);
    const [searchText, setSearchText] = useState("");

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0126517&lng=77.0017465&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setApiData(json?.data?.cards[2]?.data?.data?.cards);
        setRestarauntData(json?.data?.cards[2]?.data?.data?.cards);
    };
   
    return restaurantData.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input
                        type='text'
                        className='search-box'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const searchedRestraunt = apiData.filter(
                                (restaurant) =>
                                    restaurant.data.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );

                            setRestarauntData(searchedRestraunt);
                        }}
                    >
                        Search
                    </button>
                </div>

                <button
                    className='top-rated'
                    onClick={() => {
                        const resData = resList.filter(
                            (restaurant) => restaurant.data.avgRating > 4.0
                        );
                        setRestarauntData(resData);
                    }}
                >
                    Top Rated Restraunts
                </button>
            </div>

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
