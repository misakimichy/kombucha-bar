import React from 'react'
import PropTypes from 'prop-types'

const Keg = props => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.brand}</p>
            <p>Left:{props.pints} /124 pints</p>
        </div>
    )
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    pints: PropTypes.number
}

export default Keg