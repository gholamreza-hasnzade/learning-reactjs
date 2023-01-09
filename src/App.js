import React, { Component } from "react";
import Main from "./class-components";
import ProductCart from "./practice-components/product-cart";

export class App extends Component {
    render() {
        return (
            <>
            <Main message={"this is text"}/>
              {/*   <ProductCart /> */}
            </>
        );
    }
}
export default App;
