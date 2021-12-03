import React from "react";
import { Redirect, Route } from "react-router";
import {useSelector}from "react-redux"

export default function PrivateRoutte(props) {

  const {user} = useSelector((store) => store.auth)

  if (!user) return <Redirect to="/auth" />;
  

  return <Route {...props} />;
}
