import { useEffect } from "react"

const useShadowNavbar = () => {

    useEffect(() => {
        const shadowOnScroll = () => {
            if (window.scrollY >= 150) {
                const navbar = document.querySelector(".navbar")
                navbar.classList.add("shadow-navbar")
            } else {
                const navbar = document.querySelector(".navbar")
                navbar.classList.remove("shadow-navbar")
            }
        }
    
        window.addEventListener("scroll", shadowOnScroll)
    
        return (()=> {
            window.removeEventListener("scroll", shadowOnScroll)
        })
        
    }, [])

}

export default useShadowNavbar