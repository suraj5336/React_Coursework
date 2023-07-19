import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import store from "../utils/store";



const Header = () => {

    //let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items)
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 ">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart - {cartItems.length} Items</li>
                    {/* {user.name} */}
                    <button className="login" onClick={() => {btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;