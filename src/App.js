import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
// App Context Component
const Appcontext = () => {
  const [changename, setchangename] = useState("ADMIN");
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedinusername: changename, setchangename }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Router Configuration
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Appcontext />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Body /> }, // Use index: true for default child route
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <div>
                <Shimmer />
              </div>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

// Root Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
