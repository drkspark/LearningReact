import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Img
 *          - Name of Res, Star Rating, Cusines, etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const resData = {
    data: {
        type: "F",
        id: "66268",
        name: "Hotel Sri Madurai Meenakshi",
        uuid: "ec218f70-3e45-4e2f-ac9c-a58bfc735018",
        city: "14",
        area: "Peelamedu",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "kohng6fk7log2eslepxc",
        cuisines: ["Biryani", "Chinese", "South Indian", "Chettinad"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 1.5,
        slugs: {
            restaurant: "hotel-sri-madurai-meenakshi-vk-road-peelamedu",
            city: "coimbatore",
        },
        cityState: "14",
        address: "17/18. VK Road, Near PSG Tech Signal , Peelamedu, Cbe -04",
        locality: "Vk Road",
        parentId: 102648,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
            fees: [
                {
                    name: "distance",
                    fee: 2000,
                    message: "",
                },
                {
                    name: "time",
                    fee: 0,
                    message: "",
                },
                {
                    name: "special",
                    fee: 0,
                    message: "",
                },
            ],
            totalFees: 2000,
            message: "",
            title: "Delivery Charge",
            amount: "2000",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
        },
        lastMileTravelString: "1.5 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            discountTag: "",
            headerTypeV2: 0,
        },
        sla: {
            restaurantId: "66268",
            deliveryTime: 19,
            minDeliveryTime: 19,
            maxDeliveryTime: 19,
            lastMileTravel: 1.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 1000,
        new: false,
    }
};
// Destructing on the fly
// const RestaurantCard = ({resName, cusine})

const RestaurantCard = (props) => {
    const { resName, cusine } = props;
    console.log(props);
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt='res-logo'
                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqwpuhgnsaf18te7zvtv'
            ></img>

            <h3>{resName}</h3>
            <h4>{cusine}</h4>

            {/* When we pass Normally 
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4> */}

            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

// Props are just like arguments to function
// Dynamic data => props
const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                <RestaurantCard
                    resName='Meghna Foods'
                    cusine='Biryani, North Indian, Asian'
                />
                <RestaurantCard resName='KFC' cusine='Burger, Fast Food' />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
