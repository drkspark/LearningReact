import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // ! Local State Variable
    // useState gives us an Array having 2 elements:
    //  0th idx => State Variable
    //  1st idx => setState Function used to update the State and trigger a re-render
    // useState takes an argument: useState(initial State)
    const [restaurantData, setRestarauntData] = useState(resList); // Here we are just Destructuring

    /**
     * We ca also destructure it like
     * const arr = useState(resList);
     *
     * const [restrauntData, setRestrauntData] = arr;
     *
     *!          OR
     *
     * const restaurantData = arr[0];
     * const setRestrauntData = arr[1]
     */

    //! Whenever you are using data make sure you don't edit the Data you fetched from the API

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

/**
 * Updating Virtual DOM => Reconsiliation Algorithm or React Fibre
 *? Virtual DOM => Object which we get when we print the JSX componenet
 * This came out in React 16
 *? This will use Diff algorithm to find the difference and then update the real DOM.
 * It finds out differnce between those 2 objects.
 * React doesn't touch the HTML
 */