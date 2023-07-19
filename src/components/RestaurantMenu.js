import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"

const RestaurantMenu = () =>
{
    
    const resInfo = useRestaurantMenu();

    if(resInfo === null)
        return (<Shimmer/>);
    //console.log(resInfo);
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    const dispatch = useDispatch();

    const handeleAddItem = () => {
        dispatch(addItem("Grapes"));
    }

    return (
        <div className="flex">
            <div>
                <h1>{name}</h1>
                <h2>{cuisines}</h2>
                <h3>{costForTwoMessage}</h3>
                {/* <h3>{itemCards.length}</h3> */}
            </div>
            

            <div>
                <button className="p-2 m-5 bg-green-100" onClick={() => handeleAddItem()}> 
                    Add Item
                </button>
            </div>


            <div>
                <h1> Menu </h1>
                <ul>
                    {itemCards.map((item) => (<li key={item.card.info.id}> {item.card.info.name}  - Rs. {item.card.info.price/100} <button className="p-1 bg-green-50" onClick={()=>addFoodItem}>
                        </button></li>))}
                </ul>
            </div>
            

        </div>
    )
}

export default RestaurantMenu;