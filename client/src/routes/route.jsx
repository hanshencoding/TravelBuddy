import { createBrowserRouter } from 'react-router';
import Home from '../pages/home'
import Trip from '../pages/trip'
import Itinerary from '../pages/itinerary'
import Buddy from '../pages/buddy'
import Register from '../pages/register'
import Login from '../pages/login'

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home></Home>
    },
    {
        path : "/trip",
        element : <Trip></Trip>
    },
    {
        path : "/itinerary",
        element : <Itinerary></Itinerary>
    },
    {
        path : "/buddy",
        element : <Buddy></Buddy>
    },
    {
        path : "/register",
        element : <Register></Register>
    },
    {
        path : "/login",
        element : <Login></Login>
    }
]);
export default router;