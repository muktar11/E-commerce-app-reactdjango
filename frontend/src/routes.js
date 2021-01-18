import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./container/Login";
import Signup from "./container/Signup";
import HomepageLayout from "./container/Home";
import ProductList from "./container/ProductList";
import ProductDetail from "./container/ProductDetail";
import OrderSummary from "./container/OrderSummary";
import Checkout from "./container/Checkout";
import Profile from "./container/Profile";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;
