import React, { Component } from "react";
export default class Product extends Component {
    render() {
        const { id, title, price, img, onClick } = this.props;
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
    }
}
