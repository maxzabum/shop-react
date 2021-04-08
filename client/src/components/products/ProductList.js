import React, { Component } from "react";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
  showProduct() {
    return (
      this.props.products &&
      this.props.products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddOrder={this.props.onAddOrder}
        />
      ))
    );
  }

  render() {
    return (
      <div>
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          {this.showProduct()}
        </div>
      </div>
    );
  }
}
