import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "shop",
    element: <Shop></Shop>,
  },
  {
    path: "cart",
    element: <Cart></Cart>,
  },
];

export default routes;
