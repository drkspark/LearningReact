import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";

export default function RestaurantMenu() {
    const { resId } = useParams();
    const [hotelInfo, setHotelInfo] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_URL + resId);
        const menu = await data.json();
        console.log(menu);
        console.log(
            menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
        );
        setHotelInfo(menu?.data?.cards[0]);
        setMenuItems(
            menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
        );
    };

    // if (menuItems != undefined) console.log(menuItems[0]?.card?.card?.info);

    if (!menuItems || !hotelInfo || menuItems.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className='menu-container'>
            <h1>{`${hotelInfo?.card?.card?.info?.name} @ ${hotelInfo?.card?.card?.info?.city}`}</h1>
            <p>
                <b>{hotelInfo?.card?.card?.info?.costForTwoMessage}</b>
            </p>
            <h2>Menu</h2>
            <div className='menu-heading'>
                <ol>
                    {menuItems.map((item) => {
                        return (
                            <li key={item?.card?.info?.id}>
                                {item?.card?.info?.name}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
