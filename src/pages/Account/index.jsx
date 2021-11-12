import React from 'react'
import Address from './components/Address'
import AddressEdit from './components/AddressEdit'
import BreadCrumb from '../../components/BreadCrumb'
import Order from './components/Order'
import Orders from './components/Orders'
import Payment from './components/Payment'
import PaymentEdit from './components/PaymentEdit'
import PersonalInfo from './components/PersonalInfo'
import WishList from './components/WishList'


export default function Account() {
    return (
        <>
            <BreadCrumb/>
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
                  <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
                    Orders
                  </a>
                  <a className="list-group-item list-group-item-action dropright-toggle " href="account-wishlist.html">
                    Widhlist
                  </a>
                  <a className="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">
                    Personal Info
                  </a>
                  <a className="list-group-item list-group-item-action dropright-toggle active" href="account-address.html">
                    Addresses
                  </a>
                  <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                    Payment Methods
                  </a>
                  <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
                    Logout
                  </a>
                </div>
              </nav>
            </div>
                <AddressEdit/>
                <Address/>
                <Order/>
                <Orders/>
                <PaymentEdit/>
                <Payment/>
                <PersonalInfo/>
                <WishList/>
          </div>
        </div>
      </section>         
        </>
    )
}
