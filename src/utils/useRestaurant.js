import { useState } from "react";

const useRestaurant = ({resId}) => {

        const [restaurant, setRestaurant] = useState(null);

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