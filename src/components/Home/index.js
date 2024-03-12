import { Component } from "react";

import "./index.css";

import Loader from "react-loader-spinner";

import { Link } from "react-router-dom";

import ProductCard from "../ProductCard";

class Home extends Component {
  state = {
    isLoading: true,
    productsData: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const productsUrl = "https://fakestoreapi.com/products/";
    const response = await fetch(productsUrl);
    const data = await response.json();
    this.setState({ productsData: data, isLoading: false });
  };

  renderProductsList = () => {
    const { productsData } = this.state;
    console.log(productsData);
    return (
      <ul className="cards-container">
        {productsData.map((eachProduct) => (
          <ProductCard key={eachProduct.id} cardDetails={eachProduct} />
        ))}
      </ul>
    );
  };

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  );

  render() {
    const { isLoading } = this.state;
    return (
      <Link to="/">
        <div className="app-container">
          <div className="home-container">
            <h1 className="header">Products</h1>
            {isLoading ? this.renderLoader() : this.renderProductsList()}
          </div>
        </div>
      </Link>
    );
  }
}
export default Home;
