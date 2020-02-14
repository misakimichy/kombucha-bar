import React from 'react'
import PropTypes from 'prop-types'

const Keg = props => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.brand}</p>
            <p>Price: ${props.price}</p>
            <p>Flavor: {props.flavor}</p>
            <p>Left:{props.brand} /124 pints</p>
        </div>
    )
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
    pints: PropTypes.number
}

export default Keg