import React from 'react'
import Blog from "../../blog/Blog"
import { img1, img2, img3 } from "./importImages"
import "./BlogSection.scss"


const BlogSection = ( { title } ) => {
    return (
        <section className="blog__section">
            <h2 className="section-title">{title}</h2>

            <div className="blog__container">
                <Blog
                    img={img1}
                    title="Lorem ipsum dolor sit"
                    date="Julio 29, 2022"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non maxime amet dolor voluptas facilis corporis, consequatur eius est sunt suscipit?"
                    ctaText="leer más"
                />

                <Blog
                    img={img2}
                    title="Lorem ipsum dolor sit"
                    date="Noviembre 29, 2022"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non maxime amet dolor voluptas facilis corporis, consequatur eius est sunt suscipit?"
                    ctaText="leer más"
                />

                <Blog
                    img={img3}
                    title="Lorem ipsum dolor sit"
                    date="Diciembre 10, 2022"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non maxime amet dolor voluptas facilis corporis, consequatur eius est sunt suscipit?"
                    ctaText="leer más"
                />
            </div>
        </section>
    )
}

export default BlogSection