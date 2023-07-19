import React, { useState, lazy, Suspense }from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Instamart from "./components/Instamart"
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Suraj Kumar",
        email: "support@reactapp.com"
    })

    return (
        <Provider store = {store}>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser,
            }}
            >
            <div className="app">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
    )  
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/instamart",
                element: <Instamart/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)