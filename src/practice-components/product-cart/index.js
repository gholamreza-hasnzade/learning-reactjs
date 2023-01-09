import React from "react";
import Product from "./product/product";

const ProductCart = () => {
    const products = [
        {
            id: 1,
            title: "Samsung A51",
            price: 300,
            des: "Is is the best smaty phon for 2021",
            img: "/logo512.png",
        },
        {
            id: 2,
            title: "Sony A51",
            price: 400,
            des: "Is is the best smaty phon for 2021",
            img: "/logo512.png",
        },
        {
            id: 3,
            title: "GLX",
            price: 500,
            des: "Is is the best smaty phon for 2021",
           // img: "/logo512.png",
        },
    ];
    return (
        <div className="container">
            {products?.map((item) => (
                <Product key={item.id} {...item} />
            ))}
        </div>
    );
};

export default ProductCart;
