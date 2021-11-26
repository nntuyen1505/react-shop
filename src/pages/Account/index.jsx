import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import {
  Address,
  Orders,
  Payment,
  PersonalInfo,
  WishList,
} from "./components";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout";
import { useAuth } from "../../hook/useAuth";

export default function Account() {

  let { url } = useRouteMatch();
  let {logOut} = useAuth()

  return (
    <Layout>
      <BreadCrumb>
        <BreadCrumbItem  to="/">Home</BreadCrumbItem>
        <BreadCrumbItem  to="#">My Account</BreadCrumbItem>
      </BreadCrumb>
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Nav */}
              <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle"
                    to={`${url}/oders`}
                  >
                    Orders
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "                 
                    to={`${url}/account-wishlist`}
                  >
                    Widhlist
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${url}`}
                    exact
                  >
                    Personal Info
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle"
                    to={`${url}/account-address`}
                  >
                    Addresses
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={`${url}/account-payment`}
                  >
                    Payment Methods
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle"
                    to="/"
                    onClick={(e)=>{
                      e.preventDefault()
                      logOut()
                    }}
                  >
                    Logout
                  </NavLink>
                </div>
              </nav>
            </div>
            <Switch>
              {/* <Route path="/account/address-edit" exact  component={<AddressEdit />}/> */}
              <Route path={`${url}/`} exact component={PersonalInfo} />
              <Route path={`${url}/oders`}   component={Orders} />
              {/* <Route path="/order-detail" component={Order} /> */}
              <Route path={`${url}/account-wishlist`}  component={WishList} />
              <Route path={`${url}/account-address`}  component={Address} />
              <Route path={`${url}/account-payment`}  component={Payment} />
              {/* <Route path="/account/paymentedit" component={<PaymentEdit />} /> */}
            </Switch>
          </div>
        </div>
      </section>
    </Layout>
  );
}
