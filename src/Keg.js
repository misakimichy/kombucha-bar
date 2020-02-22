import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Keg = props => {
    return(
        <section className='keg-card'>
            <h2>{props.name}</h2>
            <p>{props.brand}</p>
            <p>Price: ${props.price}</p>
            <p>Flavor: {props.flavor}</p>
            <p>{props.pints} /124 pints</p>
            {console.log('keg component', props)}
            <Link
                to={{
                    pathname: '/edit',
                    state:{
                        name: props.name,
                        brand: props.brand,
                        price: props.price,
                        flavor: props.flavor
                    }
                }}
            >
                Edit info
            </Link>
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