import React from 'react'
import "./ProductCard.scss"

const ProductCard = ( { discount, img, title, children, currentPrice, oldPrice } ) => {
    return (
        <div className="productCard">
            {(discount) ? <span className="productCard-discount">{discount}</span> : ""}

            <div className="productCard__actions">
                <i className="ri-eye-line"></i>
                <i className="ri-heart-3-line"></i>
                <i className="ri-share-line"></i>
            </div>
            
            <div className="productCard__content">
                <img src={img} alt={title} className="productCard__content-img" />

                <div className="productCard__content__cualification">
                    {children}
                </div>

                <h3 className="productCard__content-title">{title}</h3>

                <div className="productCard__content__price">
                    <i className="ri-shopping-cart-2-line"></i>

                    <div className="productCard__content__price__discount">
                        <span className="current-price">{currentPrice}</span>
                        {(oldPrice) ? <span className="old-price">{oldPrice}</span> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard