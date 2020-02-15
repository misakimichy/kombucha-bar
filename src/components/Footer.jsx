import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <nav>
                <ol className='header-nav-ul'>
                    <Link to='/' style={{ textDecoration: 'none'}}>Happily handmade in Seattle with love and coffee &#9400;2020 Misaki Koonce</Link>
                </ol>
            </nav>
            <style jsx>{`
                footer {
                    height: 5vh;
                    padding: 1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    // Option for fixed footer
                    // background-color: white;
                    // width: 100%;
                    // position: fixed;
                    // bottom: 0;
                    // left: 0;
                }
                .header-nav-ul {
                    margin: 0;
                    font-size: 12px;
                }
            `}</style>
        </footer>
    )
}

export default Footer