import React from 'react'
import PropTypes from 'prop-types'

const Keg = props => {
    return(
        <section className='keg-card'>
            <h2>{props.name}</h2>
            <p>{props.brand}</p>
            <p>Price: ${props.price}</p>
            <p>Flavor: {props.flavor}</p>
            <p>{props.pints} /124 pints</p>
            <style>{`
                .keg-card {
                    border: 1px solid #efefef;
                    border-radius: 4px;
                    min-width: 200px;
                    text-align: center;
                    padding: 2em;
                    margin-bottom: 2em;
                }
            `}</style>
        </section>
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