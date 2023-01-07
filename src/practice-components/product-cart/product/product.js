import React from "react";

// * import style
import "./product.css";

const Product = () => {
    return (
        <div>
            <h2>Product Cart</h2>
            <div className="card">
                <img src="/logo512.png" alt="" />
                <h1>Samsung A51</h1>
                <p className="price">$300</p>
                <p>Is is the best smaty phon for 2021</p>
                <button className="btn">Add to card</button>
            </div>
        </div>
    );
};

export default Product;
