import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default class NotFound extends Component {
  render() {
    const style = {
      textHead: {
        fontFamily: "Pridi",
        fontSize: 80,
        margin: 10,
        color: "tomato",
      },
      textDes: {
        fontFamily: "Pridi",
        fontSize: 40,
      },
    };
    return (
      <div>
        <Header />
        <div className="d-flex flex-col justify-cen">
          <p style={style.textHead}>404</p>
          <p style={style.textDes}>ไม่พบหน้านี้</p>
        </div>
        <Footer companyName="One Geo Survey" copyRight="bump@ogs" />
      </div>
    );
  }
}
