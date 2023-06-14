import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                {resList.map((restraunt) => (
                    <RestaurantCard key={restraunt.id} resData={restraunt} />
                ))}
            </div>
        </div>
    );
};

export default Body;
