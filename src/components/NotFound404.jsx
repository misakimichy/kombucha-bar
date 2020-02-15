import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import notFoundBackground from './../assets/images/404background.jpeg'

const NotFound = props => {
    return(
        <main>
            <div className='main-container'>
                <h1>404 Page Not Found</h1>
                <p>Unfortunately, page {props.location.pathname} does not exist!</p>
                <div>
                    <Link to='/' className='link'>Back Home</Link>
                </div>
            </div>
            <style jsx>{`
                main {
                    background: url(${notFoundBackground}) no-repeat center center fixed;
                    background-size: cover;
                    height: 100vh;
                    overflow: hidden
                }

                .main-container {
                    width: 80%;
                    margin: 2em auto;
                    padding: 2em;
                    background-color: rgba(255, 255, 255, 0.4);
                    border-radius: 4px;
                }

                h1, p {
                    text-align: center;
                }
                
                .link {
                    margin: 0 auto;
                }

                main div div {
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </main>
    )
}

NotFound.propTypes = {
    location: PropTypes.object
}

export default NotFound