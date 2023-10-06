import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


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