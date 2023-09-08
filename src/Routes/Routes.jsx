import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
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
            element:<Order></Order>
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
    },{
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'myCart',
          element: <MyCart></MyCart>
        },
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);