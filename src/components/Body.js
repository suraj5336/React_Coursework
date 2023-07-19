import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
//import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        //console.log("UseEffect Called")
        fetchData();
    }, [])

    const fetchData = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6926462&lng=85.26189869999999&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        //console.log(json);

        setListOfRestaurants(json?.data?.cards[1]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[1]?.data?.data?.cards)
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection!!
            </h1>
        )
    }

    //console.log("Body rendered");
    return ListOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className=" search p-4 m-4 ">
                    <input type="text" className="border border-solid border-black" value = {searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        console.log(searchText)

                        const filteredRestaurants = ListOfRestaurants.filter((res) => 
                            res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        )

                        setFilteredRestaurants(filteredRestaurants);
                    }}
                    >Search</button>
                </div>
                <div className=" search p-4 m-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => { const FilteredList = ListOfRestaurants.filter((res)=> res.data?.avgRating >= 4)
                    //console.log(resObj);
                    setFilteredRestaurants(FilteredList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">

                {filteredRestaurants.map((restaurant) => {return (<Link key = {restaurant.data.id} to={"/restaurants/"+restaurant.data.id}><RestaurantCard resData = {restaurant}/></Link>)})}
                
            </div>
        </div>
    )
}

export default Body;