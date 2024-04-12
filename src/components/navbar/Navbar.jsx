import React from 'react'
import useMenuMobile from "./useMenuMobile"
import useShadowNavbar from './useShadowNavbar'
import "./Navbar.scss"


const Navbar = () => { 

    const { openMenu, handleMenu } = useMenuMobile()
    useShadowNavbar()


    return (
        <div className="navbar">
            <div className="data">
                <div className="data__container">
                    <div className="data__support">
                        <i className="ri-customer-service-fill"></i>
                        <div className="data__support__texts">
                            <span className="data__support__texts-text">Soporte al cliente</span>
                            <span className="data__support__texts-text">123-456-7890</span>
                        </div>
                    </div>

                    <h1 className="data-title">
                        <i className="ri-cup-line"></i>
                        Barista    
                    </h1>

                    <div className="data__account">
                        <i className="ri-user-3-fill"></i>
                        <span className="data__account-line"></span>
                        <i className="ri-shopping-cart-2-line"></i>
                    </div>
                </div>
            </div>

            <nav className="nav">
                <div className="nav__container">
                    <button className="nav__hamburger" onClick={handleMenu} aria-label="Abrir y/o cerrar menú">
                        {openMenu ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
                    </button>

                    <ul className={openMenu ? "nav__ul open-menu" : "nav__ul"}>
                        <li><a href="#" className="nav__ul-link">Inicio</a></li>
                        <li><a href="#" className="nav__ul-link">Moca helado</a></li>
                        <li><a href="#" className="nav__ul-link">Expreso</a></li>
                        <li><a href="#" className="nav__ul-link">Capuchino</a></li>
                        <li><a href="#" className="nav__ul-link">Más</a></li>
                        <li><a href="#" className="nav__ul-link">Blog</a></li>
                    </ul>

                    <div className="nav__search">
                        <input type="text" className="nav__search-input" placeholder="Buscar..." />
                        <button className="nav__search-btn" aria-label="Buscar">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Navbar