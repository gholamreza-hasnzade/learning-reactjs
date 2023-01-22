import React from "react";

const CartProduct = (props) => {
    const { id, title, img, price, onRemove } = props;
    return (
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img
                    className="cart-item-image"
                    alt=""
                    src={img}
                    width="100"
                    height="100"
                />
                <span className="cart-item-title">{title}</span>
            </div>
            <span className="cart-price cart-column">$ {price}</span>
            <div className="cart-quantity cart-column">
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => onRemove(id)}
                >
                    REMOVE
                </button>
            </div>
        </div>
    );
};

export default CartProduct;
