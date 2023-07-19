import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

const data = await fetch(MENU_API + resId);
        const json = await data.json();
        //console.log(json);
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;