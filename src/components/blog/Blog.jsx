import React from 'react'
import "./Blog.scss"


const Blog = ( { img, title, date, description, ctaText } ) => {
    return (
        <article className="blog">
            <img src={img} alt={title} className="blog-img" />
            <div className="blog__texts">
                <h3 className="blog__texts-title">{title}</h3>
                <span className="blog__texts-date">{date}</span>
                <p className="blog__texts-description">{description}</p>
                <a href="#" className="blog__texts-cta">{ctaText}</a>
            </div>

            <div className="blog__search">
                <button className="blog__search-btn" aria-label="Buscar">
                    <i className="ri-search-line"></i>
                </button>
                <button className="blog__search-btn" aria-label="Copiar enlace">
                    <i className="ri-link"></i>
                </button>
            </div>
        </article>
    )
}

export default Blog