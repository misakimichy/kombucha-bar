import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Link to='/'>Kombucha Bar</Link>
            <nav>
                <Link to='/add-new' className='nav-item'>Add New Keg</Link>        
                <Link to='/edit' className='nav-item'>Edit Keg</Link>        
                <Link to='/inventory' className='nav-item'>Inventory</Link>        
            </nav>
            <style jsx>{`
                header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                nav {
                    width: 30vw;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;

                }
            `}</style>
        </header>
    )
}

export default Header