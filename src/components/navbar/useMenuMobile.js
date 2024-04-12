import { useState, useEffect } from 'react'

const useMenuMobile = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        const removeMenuMobileOnDesktop = () => {
            if (window.innerWidth >= 768) setOpenMenu(false)
        }

        window.addEventListener("resize", removeMenuMobileOnDesktop)

        return (()=> {
            window.removeEventListener("resize", removeMenuMobileOnDesktop)
        })
    }, [])
    

    return {
        openMenu,
        handleMenu
    }
}

export default useMenuMobile