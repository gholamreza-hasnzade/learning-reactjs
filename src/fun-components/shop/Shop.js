import React, { useState } from "react";
import Product from "./Product";
import CartProduct from "./CartProduct";
import Social from "./Social";

import img1 from "./images/Album_1.png";
import img2 from "./images/Album_2.png";
import img3 from "./images/Album_3.png";
import img4 from "./images/Album_4.png";
import Cofee from "./images/Cofee.png";
import Shirt from "./images/Shirt.png";

import "./App.css";
const Shop = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Album 1",
            price: 5,
            img: img1,
        },
        {
            id: 2,
            title: "Album 2",
            price: 15,
            img: img2,
        },
        {
            id: 3,
            title: "Album 3",
            price: 20,
            img: img3,
        },
        {
            id: 4,
            title: "Album 4",
            price: 100,
            img: img4,
        },
        { id: 5, title: "Coffee", price: 5, img: Cofee },
        { id: 6, title: "Shirt", price: 50, img: Shirt },
    ]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const addToCartHandler = (cartId) => {
        const product = products.find((product) => product.id === cartId);
        setShoppingCart([...shoppingCart, product]);
    };

    const emptyShoppingCartHandler = () => {
        setShoppingCart([]);
    };

    const removeShoppingCartHandler = (cartId) => {
        const filterShoppingCart = shoppingCart.filter(
            (cart) => cart.id !== cartId
        );
        setShoppingCart(filterShoppingCart);
    };
    return (
        <>
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">STORE</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">SabzLearn Shop</h1>
            </header>
            <section className="container content-section">
                <div className="shop-items">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            {...product}
                            onClick={addToCartHandler}
                        />
                    ))}
                </div>
            </section>
            <section className="container content-section">
                <h2 className="section-header">CART</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">
                        ITEM
                    </span>
                    <span className="cart-price cart-header cart-column">
                        PRICE
                    </span>
                    <span className="cart-quantity cart-header cart-column">
                        Doing
                    </span>
                </div>
                <div className="cart-items">
                    {shoppingCart.map((cart, index) => (
                        <CartProduct
                            {...cart}
                            key={index}
                            onRemove={removeShoppingCartHandler}
                        />
                    ))}
                </div>
                <button
                    className="btn btn-primary btn-purchase"
                    type="button"
                    onClick={emptyShoppingCartHandler}
                >
                    Empty Cart
                </button>
            </section>
            <footer className="main-footer">
                <div className="container main-footer-container">
                    <h3 className="band-name">The Generics</h3>
                    <ul className="nav footer-nav">
                        <Social />
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Shop;
