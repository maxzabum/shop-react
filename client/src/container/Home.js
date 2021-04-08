import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/products/ProductItem";
import Monitor from "../components/monitor/Monitor";
import "../App.css";
import { connect } from "react-redux";
import { productsFecth } from "../actions/index";
import axios from "axios";
// import Axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = { products: "" };
  }
  componentDidMount() {
    this.props.productsFecth();
  }
  render() {
    return (
      <div>
        {/*<Header />*/}
        <hr />
        <Monitor products={this.props.products} />
        <hr />

      </div>
    );
  }
}
function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps, { productsFecth })(Home);
