import React from "react";

// * import style
import "./product.css";

// *  change props name
const Product = ({ title: ProductTitle, price, des, img }) => {
  let title = "Product Cart";
  return (
    <div>
      <h2>{title}</h2>
      <div className="card">
        <img src={img} alt={ProductTitle} />
        <h1>{ProductTitle}</h1>
        <p className="price">$ {price}</p>
        <p>{des}</p>
        <button className="btn">Add to card</button>
      </div>
    </div>
  );
};

export default Product;
