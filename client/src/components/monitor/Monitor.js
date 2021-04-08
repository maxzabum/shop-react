import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../products/ProductList";
import axios from "axios";
export default class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0, orders: [], confirm: false, msg: "" };
    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.clearOrder = this.clearOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
  }
  addOrder(product) {
    let findItem = this.state.orders.find(
      (order) => order.product.id == product.id
    );
    if (findItem) {
      findItem.quatity++;
    } else {
      this.state.orders.push({ product: product, quatity: 1 });
    }
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders,
      confirm: false,
    });
    console.log(this.state.orders);
  }
  delOrder(product) {
    let findItem = this.state.orders.find(
      (order) => order.product.id == product.id
    );
    let result = this.state.orders.filter(
      (order) => order.product.id != product.id
    );
    const totalPrice =
      this.state.totalPrice - findItem.quatity * findItem.product.unitPrice;
    this.setState({ totalPrice: totalPrice, orders: result });
  }
  confirmOrder() {
    const { totalPrice, orders, confirm } = this.state;
    if (orders && orders.length !== 0) {
      axios
        .post("http://localhost:3001/orders", {
          orderDate: new Date(),
          totalPrice,
          orders,
        })
        .then((res) => {
          this.setState({
            totalPrice: 0,
            orders: [],
            confirm: true,
            msg: "สั่งซื้อเรียบร้อยครับ",
          });
        });
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        confirm: true,
        msg: "ยังไม่มีรายการสั่งซื้อ",
      });
    }
  }
  clearOrder() {
    this.setState({
      totalPrice: 0,
      orders: [],
      confirm: false,
      msg: "ยกเลิกเรียบร้อยครับ",
    });
  }
  render() {
    return (
      <div className="d-flex-between">
        <div>
          <ProductList
            products={this.props.products}
            onAddOrder={this.addOrder}
          />
        </div>
        <div>
          <Calculator
            msg={this.state.msg}
            totalPrice={this.state.totalPrice}
            confirm={this.state.confirm}
            orders={this.state.orders}
            onDelOrder={this.delOrder}
            onClear={this.clearOrder}
            onConfirm={this.confirmOrder}
          />
        </div>
      </div>
    );
  }
}
