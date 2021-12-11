import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

export default function PrivateRoutte(props) {
  const { user } = useSelector((store) => store.auth);
  // const { listCart } = useSelector((store) => store.cart);

  if (!user) return <Redirect to="/auth" />;
  // if (listCart.length <= 0) return <Redirect to="/" />;
  

  return <Route {...props} />;
}
