// Write your code here
import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = (props) => {
  const { cardDetails } = props;
  const { id, title, category } = cardDetails;
  return (
    <li className="card-item">
      <Link to={`/product-item/${id}`} className="item-link">
        <div className="image-name-container">
          <h1 className="title">{title}</h1>
          <p className="category">{category}</p>
        </div>
      </Link>
    </li>
  );
};
export default ProductCard;
