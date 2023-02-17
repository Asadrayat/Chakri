import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Signup/Signup";
import ContuctUs from "../Pages/Contact/ContuctUs";
import AllFreshers from "../Pages/Home/AllFreshers/AllFreshers";
import AllExperienced from "../Pages/Home/AllExperienced/AllExperienced";
import Privateroute from "./Privateroute/Privateroute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/freshers',
                element: <Privateroute><AllFreshers></AllFreshers></Privateroute>
            },
            {
                path: '/experienced',
                element: <Privateroute><AllExperienced></AllExperienced></Privateroute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <Blog></Blog>
            },
            {
                path: '/contactUs',
                element: <ContuctUs></ContuctUs>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);
export default router;