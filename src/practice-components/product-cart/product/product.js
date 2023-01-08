import React from "react";

// * import style
import "./product.css";

const Product = (props) => {
    const { title, price, des, img } = props;
    return (
        <div>
            <h2>Product Cart</h2>
            <div className="card">
                <img src={img} alt={title} />
                <h1>{title}</h1>
                <p className="price">$ {price}</p>
                <p>{des}</p>
                <button className="btn">Add to card</button>
            </div>
        </div>
    );
};

export default Product;
