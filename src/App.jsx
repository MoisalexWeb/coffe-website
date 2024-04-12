import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import FeatureContainer from './components/containers/feature/FeatureContainer'
import CategoryContainer from './components/containers/category/CategoryContainer'
import ProductCardSection from './components/containers/productCardSection/ProductCardSection'
import ProductCard from './components/productCard/ProductCard'
import FilterOptions from './components/filterOptions/FilterOptions'
import { product1, product2, product3, product4, especial1, especial2, especial3, especial4 } from "./importImages"
import Gallery from './components/containers/gallery/Gallery'
import BlogSection from './components/containers/blogSection/BlogSection'
import Footer from './components/footer/Footer'
import "./App.scss"


function App() {

    return (
        <>
            <Navbar />
            
            <main>
                <Hero />

                <FeatureContainer />

                <CategoryContainer />

                <ProductCardSection title="mejores productos">
                    <FilterOptions text1="destacados" text2="más recientes" text3="más vendidos" />

                    <div className="productCard__container">
                        <ProductCard discount="-13%" title="café irish" img={product1} currentPrice="$4.60" oldPrice="$5.30">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </ProductCard>
                        
                        <ProductCard discount="-22%" title="café inglés" img={product2} currentPrice="$5.70" oldPrice="$7.30">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            <i className="ri-star-line"></i>
                        </ProductCard>
                        
                        <ProductCard title="café australiano" img={product3} currentPrice="$3.20">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </ProductCard>
                        
                        <ProductCard title="café helado" img={product4} currentPrice="$3.20">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </ProductCard>
                    </div>
                </ProductCardSection>

                <Gallery />

                <ProductCardSection title="Especiales">

                    <div className="productCard__container">
                        <ProductCard discount="-13%" title="café irish" img={especial1} currentPrice="$4.60" oldPrice="$5.30">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </ProductCard>
                        
                        <ProductCard discount="-22%" title="café inglés" img={especial2} currentPrice="$5.70" oldPrice="$7.30">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            <i className="ri-star-line"></i>
                        </ProductCard>
                        
                        <ProductCard title="café viena" img={especial3} currentPrice="$3.85" discount="-30%" oldPrice="$5.50">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </ProductCard>
                        
                        <ProductCard title="café liqueurs" img={especial4} currentPrice="$5.60">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </ProductCard>
                    </div>
                </ProductCardSection>

                <BlogSection title="últimos blogs" />
            </main>

            <Footer />
        </>
    )
}

export default App
