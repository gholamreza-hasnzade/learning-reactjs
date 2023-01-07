import React from 'react'

import "./navbar.css";

const Navbar = () => {
  return (
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
  )
}

export default Navbar