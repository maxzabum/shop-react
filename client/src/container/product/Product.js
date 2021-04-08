import React, { Component } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { withRouter } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios.get(" http://localhost:3001/products").then((res) => {
      this.setState({ products: res.data });
      console.log(this.state.products);
    });
  }
  delProduct(item) {
    axios.delete("http://localhost:3001/products/" + item.id).then((res) => {
      //   this.setState({ order: res.data });
      axios.get("http://localhost:3001/products").then((res) => {
        {
          this.setState({ products: res.data });
        }
      });
    });
  }
  editProduct(product) {
    this.props.history.push("product/edit/" + product.id);
  }
  showProduct() {
    const style = {
      sizeImg: { width: 200, height: 220 },
      sizeBut: {
        blue: {
          width: "50%",
          height: 30,
          color: "white",
          marginBottom: 15,
          borderRadius: 15,
          borderStyle: "none",
          backgroundColor: "gray",
        },
        red: {
          width: "50%",
          height: 30,
          color: "white",
          marginBottom: 15,
          borderRadius: 15,
          borderStyle: "none",
          backgroundColor: "tomato",
        },
      },
      textHead: { margin: 0 },
      textPrice: { alignSelf: "flex-end", fontSize: 15, marginBottom: 5 },
    };
    if (this.state.products && this.state.products.length != 0) {
      return this.state.products.map((item) => {
        return (
          <div key={item.id} className="d-flex flex-col justify-cen style-box">
            <img
              style={style.sizeImg}
              src={process.env.PUBLIC_URL + item.productImg}
            ></img>
            <p className="text-foot w-600" style={style.textHead}>
              {item.id} {item.productName}
            </p>
            <p className="text-foot w-300" style={style.textPrice}>
              {item.unitPrice} บาท
            </p>
            <div
              className="d-flex "
              style={{ width: "100%", justifyContent: "center" }}
            >
              <button
                style={style.sizeBut.red}
                //   value={item.id}
                onClick={() => this.delProduct(item)}
              >
                ลบสินค้า
              </button>
              <button
                style={style.sizeBut.blue}
                //   value={item.id}
                onClick={() => this.editProduct(item)}
              >
                แก้ไข
              </button>
            </div>
          </div>
        );
      });
    } else {
      console.log("eiei");
    }
  }
  render() {
    const style = {
      green: {
        width: 100,
        height: 30,
        color: "white",
        marginTop: 10,
        borderRadius: 15,
        borderStyle: "none",
        marginRight: 10,
        backgroundColor: "green",
        alignSelf: "flex-end",
      },
    };
    return (
      <div>
        <div className="d-flex flex-col">
          <button
            style={style.green}
            //   value={item.id}
            onClick={() => this.props.history.push("product/add")}
          >
            เพิ่ม
          </button>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            {this.showProduct()}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Product);
