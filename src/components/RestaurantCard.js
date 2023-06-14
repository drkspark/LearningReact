import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, avgRating, cuisines, name, costForTwoString } =
        resData;
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt='res-logo'
                src={CDN_URL + cloudinaryImageId}
            ></img>

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwoString}</h4>
        </div>
    );
};

export default RestaurantCard;
