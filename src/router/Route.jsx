import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import SingIn from "../pages/SingIn";
import SignUp from "../pages/SignUp";
import UpdateUserProf from "../pages/UpdateUserProf";
import AddSpot from "../pages/AddSpot";
import MyList from "../pages/MyList";

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
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>
      },
    ],
  },
]);

export default router;
