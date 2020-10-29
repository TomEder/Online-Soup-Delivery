import Cart from "./pages/Cart/index";
import Home from "./pages/Home/index";
import SoupInfo from "./pages/SoupInfo/index";

export default [
    {
        path: "/",
        title: "Home",
        component: Home,
        exact: true
    },
    {
        path: "/soups/:id",
        title: "Soup Info",
        component: SoupInfo
    },
    {
        path: "/cart",
        title: "Varukorg",
        component: Cart
    }
];
