import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MissionsPage from "./pages/MissionsPage";
import DataPage from "./pages/DataPage";
import RefPage from "./pages/RefPage";
import { 
    HOME_ROUTE, 
    MISSION_ROUTE, 
    ABOUT_ROUTE, 
    DATA_ROUTE, REF_ROUTE } from "./utils/consts";

export const routes = [
    {
        title: 'Home',
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        title: 'About',
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        title: 'Missions',
        path: MISSION_ROUTE,
        Component: MissionsPage
    },
    {
        title: 'Data',
        path: DATA_ROUTE,
        Component: DataPage
    },
    {
        title: 'References',
        path: REF_ROUTE,
        Component: RefPage
    },
]