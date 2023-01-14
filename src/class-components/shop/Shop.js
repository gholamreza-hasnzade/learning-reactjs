import React, { Component } from "react";
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
export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
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
            ],

            shoppingCart: [],
            socials: [
                {
                    id: 1,
                    href: "https://www.youtube.com",
                    img: "Images/YouTube Logo.png",
                },
                {
                    id: 2,
                    href: "https://www.spotify.com",
                    img: "Images/Spotify Logo.png",
                },
                {
                    id: 3,
                    href: "https://www.facebook.com",
                    img: "Images/YouTube Logo.png",
                },
            ],
        };
    }
    addToCartHandler = (cartId) => {
        const mainProducts = this.state.products;
        const product = mainProducts.find((product) => product.id === cartId);

        this.setState({
            shoppingCart: [...this.state.shoppingCart, product],
        });
    };

    emptyShoppingCartHandler = () => {
        this.setState({
            shoppingCart: [],
        });
    };

    render() {
        const { products, shoppingCart } = this.state;

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
                    <h1 className="band-name band-name-large">
                        SabzLearn Shop
                    </h1>
                </header>
                <section className="container content-section">
                    <div className="shop-items">
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                {...product}
                                onClick={this.addToCartHandler}
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
                        {shoppingCart.map((cart) => (
                            <CartProduct {...cart} key={cart?.id} />
                        ))}
                    </div>
                    <button
                        className="btn btn-primary btn-purchase"
                        type="button"
                        onClick={this.emptyShoppingCartHandler}
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
    }
}
