import { createBrowserRouter } from 'react-router';
import Home from '../pages/home'
import Explore from '../pages/explore'
import Trip from '../pages/trip'
import Itinerary from '../pages/itinerary'
import Buddy from '../pages/buddy'

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home></Home>
    },
    {
        path : "/explore",
        element : <Explore></Explore>
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
    }


]);
export default router;