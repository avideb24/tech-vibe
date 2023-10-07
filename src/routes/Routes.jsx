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


const Routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/data/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/speakers',
                element: <Speakers></Speakers>,
                loader: () => fetch('/speaker.json')
            },
            {
                path: '/packages',
                element: <Packages></Packages>,
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
            },
            
        ]

    }

])

export default Routes;