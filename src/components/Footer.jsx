import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <nav>
                <ol className='header-nav-ul'>
                    <Link to='/'>Happily handmade in Seattle with love and coffee &#9400;2020 Misaki Koonce</Link>
                </ol>
            </nav>
        </footer>
    )
}

export default Footer