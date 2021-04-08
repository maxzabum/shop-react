import React, { Component } from "react";
import "../App.css";
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { companyName, copyRight } = this.props;
    return (
      <div className="foot-cont" style={{ borderTop: "1px solid gray" }}>
        <div style={{ marginTop: "10px" }}>
          <span className="text-foot red">Powered By {companyName}</span>
          <span> | </span>
          <span className="text-foot gray">Contact me : {copyRight}</span>
        </div>
      </div>
    );
  }
}
