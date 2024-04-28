import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import SingIn from "../pages/SingIn";
import SignUp from "../pages/SignUp";
import UpdateUserProf from "../pages/UpdateUserProf";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";
import Details from "../pages/Details";
import PrivetRoute from "./PrivetRoute";
import UpdateSpotDetails from "../pages/UpdateSpotDetails";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import SpotsOfCountry from "../pages/SpotsOfCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allSpots",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/allPlace"),
      },
      {
        path: "/signIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/updateUserProfile",
        element: <UpdateUserProf></UpdateUserProf>,
      },
      {
        path: "/addSpots",
        element: (
          <PrivetRoute>
            <AddSpot></AddSpot>,
          </PrivetRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivetRoute>
            <MyList></MyList>,
          </PrivetRoute>
        ),
      },
      {
        path: "/updateSpots/:id",
        element: <UpdateSpotDetails></UpdateSpotDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allPlace/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>,
          </PrivetRoute>
        ),
        loader: ()=>fetch(`http://localhost:5000/allPlace/`)
      },
      {
        path: "/countrySpots/:country",
        element: (
          <PrivetRoute>
            <SpotsOfCountry></SpotsOfCountry>
          </PrivetRoute>
        ),
        loader: ()=>fetch(`http://localhost:5000/allPlace/`)
      },
    ],
  },
]);

export default router;
