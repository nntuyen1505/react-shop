import Page404 from "./pages/404";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import CheckOut from "./pages/CheckOut";
import ContactUs from "./pages/ContactUS";
import Faq from "./pages/Faq";
import OrderCompleted from "./pages/OrderCompleted";
import ProductPage from "./pages/ProductPage";
import ShippingAndReturns from "./pages/ShippingAndReturns";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import StoreLocator from "./pages/StoreLocator";
import { Route, Switch } from "react-router-dom";
import "./asset/custom.scss";
import { BrowserRouter } from "react-router-dom";
import { Search } from "./components/Search";
import { OpenShoppingCart } from "./components/OpenShoppingCart";
import { SizeChart } from "./components/SizeChart";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PrivateRoutte from "./components/PrivateRoute";
import ComingSoon from "./pages/CommingSoon";
import { ProductModal } from "./components/ProductModal";
import Loading from "./components/Loading";

function App() {

  return (
    <BrowserRouter>
        <Search />
        <ProductModal/>
        <OpenShoppingCart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Abouts} />
          <PrivateRoutte path="/account" component={Account} />
          <Route path="/auth" component={Auth} />
          <PrivateRoutte path="/checkout" component={CheckOut} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-detail/:slug" component={BlogDetail}/>
          <Route path="/contact" component={ContactUs} />
          <Route path="/faq" component={Faq} />
          <Route path="/order-completed/:slug" component={OrderCompleted} />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/shipping" component={ShippingAndReturns} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/store" component={StoreLocator} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route component={Page404} />
        </Switch>
        <SizeChart/>
    </BrowserRouter>
  );
}

export default App;
