import React from 'react'
import "./CategoryContainer.scss"
import Category from "../../category/Category"
import { img1, img2, img3 } from "./importImages"


const CategoryContainer = () => {
    return (
        <section className="category__section">
            <h2 className="section-title">Mejores categorías</h2>

            <div className="category__container">
                <Category img={img1} title="café moca" ctaText="ver más" />
                <Category img={img2} title="expreso americano" ctaText="ver más" />
                <Category img={img3} title="capuchino" ctaText="ver más" />
            </div>
        </section>
    )
}

export default CategoryContainer