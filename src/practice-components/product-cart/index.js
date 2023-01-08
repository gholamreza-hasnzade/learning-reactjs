import React from "react";
import Product from "./product/product";

const ProductCart = () => {
    return (
        <div className="container">
            <Product
                title="Samsung A51"
                price={300}
                des="Is is the best smaty phon for 2021"
                img="/logo512.png"
            />
        </div>
    );
};

export default ProductCart;
