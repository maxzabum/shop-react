import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import { orderFecth, orderDelete } from "../../actions/index";
class Order extends Component {
  constructor(props) {
    super(props);
    // this.state = { order: [] };
  }
  componentDidMount() {
    this.props.orderFecth();
  }
  delOrder(order) {
    this.props.orderDelete(order.id);
    // axios.delete("http://localhost:3001/orders/" + order.id).then((res) => {
    //   //   this.setState({ order: res.data });
    //   axios.get("http://localhost:3001/orders").then((res) => {
    //     {
    //       console.log(res.data);
    //       this.setState({ orders: res.data });
    //     }
    //   });
    // });
  }
  showOrders() {
    // this.state.orders.map((item) => {
    //   return <div key={item.id}>{item.totalPrice}</div>;
    // });
    // this.state.orders.map((product) => (
    //   <div key={product.id}>
    //     <p>{product.totalPrice}</p>
    //   </div>
    // ));

    if (this.props.orders && this.props.orders.length !== 0) {
      return this.props.orders.map((order) => {
        const date = new Date(order.orderDate);
        return (
          <div key={order.id} className="box-order d-flex flex-col">
            <button
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#f04d4d",
                // borderRadius: "5px",
                color: "white",
                margin: 10,
              }}
              onClick={() => this.delOrder(order)}
            >
              x
            </button>

            <p>{date.toLocaleDateString()}</p>
            <ul>
              {order.orders &&
                order.orders.map((item) => {
                  return (
                    <li key={item.product.id}>
                      <p>
                        {item.product.productName} x {item.quatity} ={" "}
                        {item.quatity * item.product.unitPrice}
                      </p>
                    </li>
                  );
                })}
            </ul>
            <p>ราคารวม {order.totalPrice}</p>
          </div>
        );
      });
    } else {
      console.log("eiei");
    }
  }
  render() {
    return (
      <div>
        <div className="d-flex ">{this.showOrders()}</div>
      </div>
    );
  }
}
function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(mapStateToProps, { orderFecth, orderDelete })(Order);
