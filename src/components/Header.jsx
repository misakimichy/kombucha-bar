import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className='home-icon'>
                <Link to='/' style={{ textDecoration: 'none'}}>Kombucha Bar</Link>
            </div>
            <nav>
                <Link to='/add-new' style={{ textDecoration: 'none'}} className='nav-item'>Add New Keg</Link>        
                <Link to='/edit' style={{ textDecoration: 'none'}} className='nav-item'>Edit Keg</Link>        
                <Link to='/inventory' style={{ textDecoration: 'none'}} className='nav-item'>Inventory</Link>        
            </nav>
            <style jsx>{`
                header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 10vh;
                }

                .home-icon {
                    width: 100%;
                    text-align: center;
                }

                nav {
                    width: 50%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `}</style>
        </header>
    )
}

export default Header