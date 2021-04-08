import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    const style = {
      logoImg: { width: 70, width: 70 },
      boderBot: { borderBottom: "1px solid gray" },
      textLogo: { fontSize: 30, marginLeft: 20 },
    };
    return (
      <div className="d-flex-between justify-cen" style={style.boderBot}>
        <div className="d-flex justify-cen">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/starbucksLogo.png"}
              style={style.logoImg}
            ></img>
          </Link>
          <p className="text-font w-600 green" style={style.textLogo}>
            OGS Cafe
          </p>
        </div>
        <div className="d-flex flex-col">
          <p className="justify-cen flex-end">
            {this.state.date.toLocaleTimeString()}
          </p>
          <li className="d-flex ">
            <Link to="/">หน้าแรก|</Link>
            <Link to="/orders">รายการสั่งซื้อ|</Link>

            <Link to="/products">สินค้า|</Link>
            <Link to="/about">เกี่ยวกับเรา</Link>
          </li>
        </div>
      </div>
    );
  }
}
