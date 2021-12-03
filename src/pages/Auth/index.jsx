import React from "react";
import Layout from "../../components/layout";
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
