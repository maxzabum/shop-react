import React, { Component } from "react";

export default class Productitem extends Component {
  constructor(props) {
    super(props);
  }
  addItem(e) {
    console.log(e.target.name);
  }
  render() {
    const style = {
      sizeImg: { width: 200, height: 220 },
      sizeBut: {
        width: "100%",
        height: 30,
        color: "white",
        marginBottom: 15,
        borderRadius: 15,
        borderStyle: "none",
        backgroundColor: "rgba(20, 170, 20, 0.726)",
      },
      textHead: { margin: 0 },
      textPrice: { alignSelf: "flex-end", fontSize: 15, marginBottom: 5 },
    };
    const { productName, unitPrice, productImg } = this.props.product;
    return (
      <div className="d-flex flex-col justify-cen style-box">
        <img
          style={style.sizeImg}
          src={process.env.PUBLIC_URL + productImg}
        />
        <p className="text-foot w-600" style={style.textHead}>
          {productName}
        </p>
        <p className="text-foot w-300" style={style.textPrice}>
          {unitPrice} บาท
        </p>
        <button
          style={style.sizeBut}
          value={unitPrice}
          onClick={() => this.props.onAddOrder(this.props.product)}
        >
          สั่งซื้อ
        </button>
      </div>
    );
  }
}
