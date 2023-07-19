import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;

    const { user } = useContext(UserContext);

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime,} = resData?.data; //destructuring
    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100">
            <img className="res-logo rounded-lg" 
            alt="res-logo" 
            src={CDN_URL + 
            cloudinaryImageId }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo / 100} For Two</h4>
            <h4>{deliveryTime}</h4>
            <h4>{user.email}</h4>
        </div>
    )
}

export default RestaurantCard;