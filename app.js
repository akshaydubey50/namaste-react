// package import
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

// component & style import
import "./index.css";
import Header from "./src/components/Header";
import BodyLayout from "./src/components/BodyLayout";
// import About from "./src/components/About";
import Error from "./src/components/error/Error";
import RestaurantMenu from "./src/components/restaurant/RestaurantMenu";


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
  return (
    <div className="layout-wrapper">
      <Header />
      <Outlet />
    </div>
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
