import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root';
import Home from "../Pages/Home";


const Routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    }

])

export default Routes;