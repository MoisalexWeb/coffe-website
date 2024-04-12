import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__item">
                    <h3 className="footer__item-title">contacto</h3>
                    <address className="footer__item-text">Dirección: 71 Pennington Lane Vernon Rockville, CT 06066</address>
                    <p className="footer__item-text">Teléfono: 123-456-7890</p>
                    <p className="footer__item-text">Fax: 55555300</p>
                    <p className="footer__item-text">EmaiL: baristas@support.com</p>

                    <div className="footer__item__social">
                        <span className="footer__item__social-span facebook">
                            <i className="ri-facebook-fill"></i>
                        </span>
                        <span className="footer__item__social-span twitter">
                            <i className="ri-twitter-fill"></i>
                        </span>
                        <span className="footer__item__social-span youtube">
                            <i className="ri-youtube-fill"></i>
                        </span>
                        <span className="footer__item__social-span pinterest">
                            <i className="ri-pinterest-fill"></i>
                        </span>
                        <span className="footer__item__social-span instagram">
                            <i className="ri-instagram-line"></i>
                        </span>
                    </div>
                </div>

                <div className="footer__item">
                    <h3 className="footer__item-title">información</h3>
                    <a href="#" className="footer__item-link">Sobre nosotros</a>
                    <a href="#" className="footer__item-link">información delivery</a>
                    <a href="#" className="footer__item-link">política de privacidad</a>
                    <a href="#" className="footer__item-link">términos y condiciones</a>
                    <a href="#" className="footer__item-link">contáctanos</a>
                </div>

                <div className="footer__item">
                    <h3 className="footer__item-title">mi cuenta</h3>
                    <a href="#" className="footer__item-link">mi cuenta</a>
                    <a href="#" className="footer__item-link">historial de órdenes</a>
                    <a href="#" className="footer__item-link">lista de deseos</a>
                    <a href="#" className="footer__item-link">boletín</a>
                    <a href="#" className="footer__item-link">reembolso</a>
                </div>                

                <div className="footer__item">
                    <h3 className="footer__item-title">Boletín informativo</h3>
                    <p className="footer__item-text">Suscríbete a nuestros boletines ahora y mantente al día con nuevas colecciones y ofertas exclusivas.</p>
                    <button className="footer__item-newsletter" aria-label="Suscríbete al boletín informativo">suscríbete</button>
                </div>

                <div className="footer__item footer__item--copy">
                    <p className="footer__item-copy">Desarrollado por <a href="https://moisalexweb.github.io/moisalexweb/" target="_blank">MoisalexWeb</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer