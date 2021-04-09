import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./container/About";
import Product from "./container/product/Product";
import Order from "./container/order/Order";
import "./App.css";
import NotFound from "./container/error/NotFound";
import ProductForm from "./components/forms/productform/ProductForm";
export default class App extends Component {
  renderRoute() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/orders" component={Order} />
        <Route path="/products" component={Product} />
        <Route path="/product/add" component={ProductForm} />

        <Route component={NotFound} />
      </Switch>
    );
  }
  render() {
    return (
      <div className="container">

        <BrowserRouter>
            <Header />
            {this.renderRoute()}
             <Footer companyName="Bump Company" copyRight="bump@khamriang" />
        </BrowserRouter>
      </div>
    );
  }
}
