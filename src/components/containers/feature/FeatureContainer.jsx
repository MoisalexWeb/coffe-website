import React from 'react'
import Feature from "../../feature/Feature"
import "./FeatureContainer.scss"



const FeatureContainer = () => {
    return (
        <section className="features__container">
            <Feature title="Envío gratuito a nivel mundial" text="En pedido superior a $150">
                <i className="ri-plane-line"></i>
            </Feature>

            <Feature title="Reembolso" text="100% garantía de devolución de dinero">
                <i className="ri-wallet-3-fill"></i>
            </Feature>

            <Feature title="Tarjeta regalo especial" text="Ofrece bonos especiales con regalo">
                <i className="ri-gift-line"></i>
            </Feature>

            <Feature title="Servicio al cliente 24/7" text="LLámenos 24/7 al 123-456-7890">
                <i className="ri-customer-service-fill"></i>
            </Feature>
        </section>
    )
}

export default FeatureContainer