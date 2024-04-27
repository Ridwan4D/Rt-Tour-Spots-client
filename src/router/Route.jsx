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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>,
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
