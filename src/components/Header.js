import React, { useState } from "react"
import { Link } from "gatsby"


export default function Header() {
    const [menuOpen, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menuOpen)
    }

    return (
        <header>
        <nav>
            <Link to="/" className="brand"><span>Hollis Harris</span></Link>

            <button className="menu-toggle" onClick={toggleMenu}>{menuOpen ? 'Close' : 'Menu'}</button>

            <menu className={`${menuOpen ? 'open' : 'close'}`}>
                <Link partiallyActive={true} activeClassName="active" className="line-hover text-dark" to="/works">Works</Link>
                <Link partiallyActive={true} activeClassName="active" className="line-hover text-dark" to="/about">About</Link>
                <Link partiallyActive={true} activeClassName="active" className="line-hover text-dark" to="/contact">Contact</Link>
            </menu>
        </nav>
        </header>
    )
}