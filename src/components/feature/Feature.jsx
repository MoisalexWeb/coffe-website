import React from 'react'
import "./Feature.scss"

const Feature = ({ children, title, text }) => {
    return (
        <article className="feature">
            {children}
            <div className="feature__text">
                <h3 className="feature__text-title">{title}</h3>
                <span className="feature__text-description">{text}</span>
            </div>
        </article>
    )
}

export default Feature