import React from 'react'
import { img1, img2, img3, img4, img5 } from "./importImages"
import "./Gallery.scss"


const Gallery = () => {
    return (
        <section className="gallery">
            <img src={img1} alt="Imagen de café" className="gallery-img" />
            <img src={img2} alt="Imagen de café" className="gallery-img" />
            <img src={img3} alt="Imagen de café" className="gallery-img gallery-img--big" />
            <img src={img4} alt="Imagen de café" className="gallery-img" />
            <img src={img5} alt="Imagen de café" className="gallery-img" />
        </section>
    )
}

export default Gallery