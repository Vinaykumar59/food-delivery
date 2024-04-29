import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"
import Body from "./src/components/Body"
// import AboutUs from './src/components/AboutUs'
import ContactUs from "./src/components/ContactUs"
import RestaurantMenu from "./src/components/RestaurantMenu";
import ErrorElement from "./src/components/ErrorElement"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// here about us component is lazy loaded
const AboutUs = lazy(() => import("./src/components/AboutUs"));
const AppLayout = () => {
  // The below line returns an object of Header , which is the V-DOM of the component  
  console.log('<Header />', <Header />);
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about-us",
        element: (<Suspense fallback={<><h1>Loading.....</h1></>}><AboutUs /></Suspense>)
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />
      }
    
    ],
    errorElement: <ErrorElement/>
  },
  // {
  //   path: "/about-us",
  //   element: <AboutUs />
  // },
  // {
  //   path: "/contact-us",
  //   element: <ContactUs/>
  // }

])
root.render(<RouterProvider router={router}/>);
