import React from 'react'
import "./Category.scss"

const Category = ( { img, title, ctaText } ) => {
    return (
        <div className="category">
            <img src={img} alt={title} className="category-bg" />
            <h3 className="category-title">{title}</h3>
            <span className="category-line"></span>
            <a href="#" className="category-cta">{ctaText}</a>
        </div>
    )
}

export default Category