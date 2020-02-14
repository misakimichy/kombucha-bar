import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Link to='/'>Kombucha Bar</Link>
            <div>
                <Link to='/add-new'>Add New Keg</Link>        
                <Link to='/edit'>Edit Keg</Link>        
                <Link to='/inventory'>Inventory</Link>        
            </div>
        </header>
    )
}

export default Header