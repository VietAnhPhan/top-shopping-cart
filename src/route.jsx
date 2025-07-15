import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";

const routes = [
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
];

export default routes;
