import React from "react";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Affiliate Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/content">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;