import Cart from "./pages/Cart/index";
import Home from "./pages/Home/index";
import SoupInfo from "./pages/SoupInfo/index";
import PreLogin from './pages/login/PreLogin.js';
import AddressForm from './pages/forms/AddressFrom';
import PaymentForm from './pages/forms/PaymentForm';
import Confirmation from './pages/confirmation/index';

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
    },
    {
        path: "/prelogin",
        title: "Loginval",
        component: PreLogin
    },
    {
        path: "/addressform",
        title: "Addressform",
        component: AddressForm
    },
    {
        path: "/payment",
        title: "Paymentform",
        component: PaymentForm
    },
    {
        path: "/confirmation",
        title: "Bekräftelse",
        component: Confirmation
    }

];
