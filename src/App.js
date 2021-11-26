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
import { createContext, useState } from "react";
import { OpenShoppingCart } from "./components/OpenShoppingCart";
import { SizeChart } from "./components/SizeChart";
import { ProductModal } from "./components/ProductModal";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AuthServices from "./pages/services/authServices";
import PrivateRoutte from "./components/PrivateRoute";
import ComingSoon from "./pages/CommingSoon";

export const Context = createContext();
function App() {

  
  /*Open SEARCH */
  const [openSearch, setOpenSearch] = useState(false);
  const toggleOpenSearch = (flag) => {
    setOpenSearch(flag);
  };
  /*Open SEARCH */

  /*Open SHOPPING-CART */
  const [openShoppingCart, setOpenShoppingCart] = useState(false);
  const toggleShoppingCart = (flag) => {
    setOpenShoppingCart(flag);
  };
  /*Open SHOPPING-CART */

  /*Open Size-guide */
  const [openSizeGuide, setOpenSizeGuide] = useState(false);
  const toggleSizeGuide = (flag) => {
    setOpenSizeGuide(flag);
  };
  /*Open Size-guide */

  /*Open Product-Modal */
  const [productModal,setProductModal]= useState(false)
  const  toggleProductModal=(flag)=>{
    setProductModal(flag)
  }
  /*Open Product-Modal */


  const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")) || null);

  /*Login Start*/
  const login= async(user)=>{
    let dataLogin = await AuthServices.login(user)
    console.log(dataLogin)
    if(dataLogin.data){
      setUser(dataLogin.data)
    }else{
      return dataLogin.error
    }
    localStorage.setItem('data', JSON.stringify(dataLogin.data))
    localStorage.setItem("token", JSON.stringify(dataLogin.data.token));
  }
  /*Login End*/

  /*Logup Start*/
  const logUp=async(user)=>{
    let dataRegister= await AuthServices.register(user)
    if(dataRegister.data){
      setUser(dataRegister.data)
    }else{
      return dataRegister.error
    }
    // localStorage.setItem('data', JSON.stringify(dataRegister.data))
    // localStorage.setItem("token", JSON.stringify(dataRegister.data.token));
  }
  /*Logup End*/



  /*LogOut Start*/
  const logOut=()=>{
    setUser(null)
    localStorage.removeItem('data')
    localStorage.removeItem('token')
  }
  /*LogOut End*/


  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          openSearch,
          toggleOpenSearch,
          openShoppingCart,
          toggleShoppingCart,
          openSizeGuide,
          toggleSizeGuide,
          productModal,
          toggleProductModal,
          user,
          setUser,
          login,
          logOut,
          logUp,
        }}
      >
        <Search />
        <OpenShoppingCart />
        <ProductModal/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Abouts} />
          <PrivateRoutte path="/account" component={Account} />
          <Route path="/auth" component={Auth} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-detail/:slug" component={BlogDetail}/>
          <Route path="/contact" component={ContactUs} />
          <Route path="/faq" component={Faq} />
          <Route path="/order" component={OrderCompleted} />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/shipping" component={ShippingAndReturns} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/store" component={StoreLocator} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route component={Page404} />
        </Switch>
        <SizeChart/>
      </Context.Provider>

    </BrowserRouter>
  );
}

export default App;
