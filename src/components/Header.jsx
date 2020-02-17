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

                .icon-container {
                    width: 100%;
                    text-align: center;
                }

                .icon-container > h1 {
                    font-size: 36px;
                    font-weight: 100;
                    letter-spacing: 1px;
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