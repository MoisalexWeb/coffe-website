import React from 'react'
import "./FilterOptions.scss"


const FilterOptions = ( {text1, text2, text3} ) => {
    return (
        <div className="filterOptions">
            <span className="filterOptions-opt active">{text1}</span>
            <span className="filterOptions-opt">{text2}</span>
            <span className="filterOptions-opt">{text3}</span>
        </div>
    )
}

export default FilterOptions