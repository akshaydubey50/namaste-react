// package import
import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";

// component & style import
import "./index.css";
import Header from "./src/components/Header";
import BodyLayout from "./src/components/BodyLayout";
// import About from "./src/components/About";
import Error from "./src/components/error/Error";
import RestaurantMenu from "./src/components/restaurant/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import store from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import { useGetStudentListQuery } from "./src/utils/studentApi";


/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - SearhInput
 *  - ResturantContainer
 * Footer
 *  - CopyRight
 *  - Footer Links
 *  - Address
 */



const Applayout = () => {
  const [UserInfo,setUserInfo]= useState("");
  // const { data, isLoading, isError, error } = useGetStudentListQuery()
  
  useEffect(()=>{

    const data = {
      name:"Akshay Dubey"
    }
    setUserInfo(data.name)

  },[])

  return (
    <Provider store={store}>
    <div className="layout-wrapper">
    <UserContext.Provider value={{loggedUser:UserInfo}}>
      <Header />
    </UserContext.Provider>
    <UserContext.Provider value={{loggedUser:"Elon Musk"}}>
      <Outlet />
    </UserContext.Provider>
    </div>
      </Provider>
  );
};

const About = lazy(() => import("./src/components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyLayout />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
