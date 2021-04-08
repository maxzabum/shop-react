import React, { Component } from "react";
import "../../App.css";
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true, text: "" };
  }
  showOrder(orders) {
    if (!orders || orders.length == 0) {
      return (
        <li style={{ listStyleType: "none", fontSize: 15, paddingLeft: 0 }}>
          ไม่มีสินค้าครับ
        </li>
      );
    } else {
      return orders.map((order) => {
        return (
          <li style={{ listStyleType: "none", fontSize: 15 }}>
            {order.product.productName} x {order.quatity}{" "}
            <button onClick={() => this.props.onDelOrder(order.product)}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-x"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                />
              </svg>
            </button>
          </li>
        );
      });
    }
  }
  alertMess() {
    // const { confirm } = this.props.confirm;
    this.setState({ visible: !this.state.visible });
    this.props.confirm = !this.props.confirm;
  }
  render() {
    const style = {
      bucket: {
        bucketBorder: {
          height: "100%",
          width: 200,
          justifyContent: "space-between",
        },
        cancleBut: { color: "red" },
        textLeft: { alignSelf: "flex-end", paddingLeft: 0 },
        borderBot: { borderBottom: "1px solid gray" },
      },
    };
    const { totalPrice, orders, confirm, msg } = this.props;
    const btn_visible = this.state.visible ? "alert" : "noAlert";
    return (
      <div className="d-flex flex-col bucketBorder">
        {this.props.confirm && (
          <div className={btn_visible}>
            <strong>{msg}</strong>
          </div>
        )}
        <h3 className="text-foot w-300" style={style.bucket.textLeft}>
          รายการสินค้า
        </h3>
        <div style={{ borderBottom: "1px solid gray" }}></div>
        <ul className="green" style={style.bucket.textLeft}>
          {this.showOrder(orders)}
        </ul>
        <div
          style={{ borderBottom: "1px solid gray", justifyContent: "end" }}
        ></div>
        <h4 style={style.bucket.textLeft}>ยอดรวม {this.props.totalPrice}</h4>
        <div style={{ borderBottom: "1px solid gray" }}></div>
        <button className="green" onClick={() => this.props.onConfirm()}>
          ยืนยัน
        </button>
        <button onClick={() => this.props.onClear()}>ยกเลิก</button>
      </div>
    );
  }
}
