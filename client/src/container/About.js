import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class About extends Component {
  render() {
    const style = {
      textHead: {
        fontSize: 50,
        color: "green",
        fontFamily: "Pridi",
      },
    };
    return (
      <div>
        <hr />
        <h1 style={style.textHead}>เกี่ยวกับเรา</h1>
        <p>สวัสดีนี้คือร้านขายเครื่องดื่มออนไลน์</p>
        <hr />
      </div>
    );
  }
}
