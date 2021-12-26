import { useDispatch } from "react-redux";
import { LOGOUT_SUCCESS } from "../../store/type";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import {
  Address,
  AddressEdit,
  OrderDetail,
  Orders,
  Payment,
  PaymentEdit,
  PersonalInfo,
  WishList,
} from "./components";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout";

export default function Account() {
  const dispatch = useDispatch();
  let { url } = useRouteMatch();

  return (
    <Layout>
      <BreadCrumb>
        <BreadCrumbItem to="/">Home</BreadCrumbItem>
        <BreadCrumbItem to="#">My Account</BreadCrumbItem>
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
                    to={`${url}`}
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
                    to={`${url}/info`}
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
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: LOGOUT_SUCCESS });
                    }}
                  >
                    Logout
                  </NavLink>
                </div>
              </nav>
            </div>
            <Switch>
              <Route
                path={`${url}/address-edit`}
                
                component={AddressEdit}
              />
              <Route path={`${url}/info`}  component={PersonalInfo} />
              <Route path={`${url}/`} exact component={Orders} />
              {/* <Route path={`${url}/:slug`} component={OrderDetail} /> */}
              <Route path={`${url}/account-wishlist`} component={WishList} />
              <Route path={`${url}/account-address`} component={Address} />
              <Route path={`${url}/account-payment`} component={Payment} />
              <Route path={`${url}/paymentedit`} component={PaymentEdit} />
            </Switch>
          </div>
        </div>
      </section>
    </Layout>
  );
}
