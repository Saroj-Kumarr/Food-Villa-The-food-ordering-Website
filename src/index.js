import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import RegisterLogin from "./Components/RegisterLogin";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Contact from "./Components/Contact";
import About from "./Components/About";
import OrderSuccess from "./Components/OrderSuccess";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        {/* <OrderSuccess /> */}
        <Outlet />
        <Footer />
        <ToastContainer autoClose={2000} />
      </Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RegisterLogin />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
