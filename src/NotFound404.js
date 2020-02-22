import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NotFound = props => {
    return(
        <main className='not-found'>
            <div className='main-container'>
                <h1>404 Page Not Found</h1>
                <p>Unfortunately, page {props.location.pathname} does not exist!</p>
                <div>
                    <Link to='/' className='link'>Back Home</Link>
                </div>
            </div>
        </main>
    )
}

NotFound.propTypes = {
    location: PropTypes.object
}

export default NotFound