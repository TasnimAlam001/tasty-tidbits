import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"menu",
            element:<Menu></Menu>
        },
        {
            path:"order/:category",
            element:<PrivateRoutes><Order></Order></PrivateRoutes>
        },
        {
          path:"login",
          element:<LogIn></LogIn>
        },
        {
          path:"signUp",
          element: <SignUp></SignUp>
        }
        
      ]
    },
  ]);