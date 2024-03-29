import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ServiceDetails from "../Pages/ServiceDetails";
import Packages from "../Pages/Packages";
import Speakers from "../Pages/Speakers";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";


const Routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/data/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/speakers',
                element: <PrivateRoute><Speakers></Speakers></PrivateRoute>,
                loader: () => fetch('/speaker.json')
            },
            {
                path: '/packages',
                element: <PrivateRoute> <Packages></Packages></PrivateRoute>,
                loader: () => fetch('/packageData.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            
        ]

    }

])

export default Routes;