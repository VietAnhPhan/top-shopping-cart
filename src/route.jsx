import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import App from "./components/App/App";

const routes = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
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
    ],
  },
];

export default routes;
