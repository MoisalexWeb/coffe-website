import React from 'react'
import "./ProductCardSection.scss"

const productCardSection = ( { title, children } ) => {
    return (
        <section className="productCard__section">
            <h2 className="section-title">{title}</h2>

            {children}
        </section>
    )
}

export default productCardSection