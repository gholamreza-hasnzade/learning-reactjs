import React from "react";

const Product = (props) => {
    const { id, title, price, img, onClick } = props;
    return (
        <div className="shop-item">
            <span className="shop-item-title">{title}</span>
            <img className="shop-item-image" src={img} alt={title} />
            <div className="shop-item-details">
                <span className="shop-item-price">$ {price}</span>
                <button
                    onClick={() => onClick(id)}
                    className="btn btn-primary shop-item-button"
                    type="button"
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default Product;
