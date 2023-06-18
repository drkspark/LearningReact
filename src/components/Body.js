import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [apiData, setApiData] = useState([]);
    const [restaurantData, setRestarauntData] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered"); // This helps us visualise that our body is being re-rendered again whenever we type
    
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
    /**
     * To use the Input text-box we need to do 2 things:
     * 1. Bind the text-box with a local State Variable
     * If we only do step1, we won't be able to see the text being typed in it.
     * 2. Add onChange which will update the, text being typed into the input box
     *
     * ! Every time we type a Character, it re-renders the whole body, and just changes the Text in input box. That's so effecient
     *
     * ! Whenever a state variable update, react triggers a reconciliation cycle (re-renders the component)
     */
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
                            // Filter the cards and update UI
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
