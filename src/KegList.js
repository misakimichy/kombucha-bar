import React from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'

const KegList = props => {
    return(
        <main>
            <h1>Our Keg List</h1>
            <section className='keg-container'>
                {Object.keys(props.kegList).map(kegId => {
                    if(!kegId) {
                        return(
                            <p>There are no kegs. Please add a new keg!</p>
                        )
                    }
                    const keg = props.kegList[kegId]
                    return (
                        <Keg 
                            key={kegId}
                            name={keg.name}
                            brand={keg.brand}
                            price={keg.price}
                            flavor={keg.flavor}
                            pints={keg.pints}
                        />
                    )
                })}
            </section>
        </main>
    )
}

KegList.propTypes = {
    kegList: PropTypes.object
}

export default KegList