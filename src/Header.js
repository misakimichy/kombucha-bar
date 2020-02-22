import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className='icon-container'>
                <h1><Link to='/' style={{ textDecoration: 'none'}}>Kombucha Bar</Link></h1>
            </div>
            <nav>
                <Link to='/add-new' style={{ textDecoration: 'none'}} className='nav-item'>Add New Keg</Link>        
                <Link to='/inventory' style={{ textDecoration: 'none'}} className='nav-item'>Inventory</Link>        
            </nav>
        </header>
    )
}

export default Header