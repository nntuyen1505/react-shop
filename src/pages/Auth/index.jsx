import React from "react";
import { Redirect } from "react-router";
import Layout from "../../components/layout";
import { useAuth } from "../../hook/useAuth";
import NewCustomer from "./components/NewCustomer";
import ReturningCustomer from "./components/ReturningCustomer";

export default function Auth() {

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="row">
            <ReturningCustomer />
            <NewCustomer />
          </div>
        </div>
      </section>
    </Layout>
  );
}
