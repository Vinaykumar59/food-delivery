import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import AboutUs from './src/components/AboutUs'
import ContactUs from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ErrorElement from "./src/components/ErrorElement";
import Cart from "./src/components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { user } from "./src/Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/Utils/AppStore";

// here about us component is lazy loaded
const AboutUs = lazy(() => import("./src/components/AboutUs"));

const AppLayout = () => {
  // The below line returns an object of Header , which is the V-DOM of the component
  console.log("<Header />", <Header />);

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setUserName("Vinay");
  }, []);

  // here <user.Provider> is a react component which is used for useContext, when we wrap any component within
  // this react component we can access latest value within that wrapper,
  // here setUserName is provided , which gives us the flexibility to update username anywhere in application
  return (
    <div className="app">
      <Provider store={appStore}>
        <user.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          {/* <Body /> */}
          <Outlet />
        </user.Provider>
      </Provider>
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
        element: <Body />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading.....</h1>
              </>
            }
          >
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <ErrorElement />,
  },
  // {
  //   path: "/about-us",
  //   element: <AboutUs />
  // },
  // {
  //   path: "/contact-us",
  //   element: <ContactUs/>
  // }
]);
root.render(<RouterProvider router={router} />);
