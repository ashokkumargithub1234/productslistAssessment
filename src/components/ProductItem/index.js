import { Component } from "react";
import Loader from "react-loader-spinner";

import "./index.css";

const productsUrl = "https://fakestoreapi.com/products/";

class ProductItem extends Component {
  state = {
    isLoading: true,
    productData: {},
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const response = await fetch(`${productsUrl}${id}`);
    const fetchedData = await response.json();

    this.setState({ productData: fetchedData, isLoading: false });
  };

  renderProductCard = (productData) => {
    const { title, description, image, category, price, rating } = productData;
    const { rate, count } = rating;
    return (
      <div className="responsive-container">
        <div className="details-container">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <p className="category-1">{category}</p>
        </div>
        <div className="img-rating-container">
          <img src={image} alt={title} className="image" />
          <p className="price">Price: {price}</p>
          <div className="rate-count">
            <p className="rating">Rating: {rate}</p>
            <p className="rating">Sold: {count}</p>
          </div>
        </div>
      </div>
    );
  };

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#10488b" height={50} />
    </div>
  );

  render() {
    const { isLoading, productData } = this.state;
    // console.log(productData);
    const className = `team-matches-container`;

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderProductCard(productData)}
      </div>
    );
  }
}

export default ProductItem;
