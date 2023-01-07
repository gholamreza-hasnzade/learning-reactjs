// eslint-disable-next-line jsx-a11y/anchor-is-valid

import React from "react";

// * import css
import "./App.css";
const App = () => {
    return (
        <div>
            <div className="nav-background">
                <div className="nav-container">
                    <header className="nav-header">
                        <h1>
                            <a href="#" className="nav-logo">
                                LOGO
                            </a>
                        </h1>
                    </header>
                    <nav>
                        <ul className="nav-ul">
                          <li> <a href="#" className="nav-link active-link">home</a></li>
                          <li> <a href="#" className="nav-link">news</a></li>
                          <li> <a href="#" className="nav-link">contact</a></li>
                          <li> <a href="#" className="nav-link">about</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default App;
