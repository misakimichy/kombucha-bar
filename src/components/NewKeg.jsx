import React from 'react'

const NewKeg = () => {
    return(
        <main>
            <h1>Add New Keg</h1>
            <form>
                <input type='text' id='kegName' name='kegName' placeholder='Keg Name' />
                <input type='text' id='kegBrand' name='kegBrand' placeholder='Keg Brand' />
                <input type='text' id='kegPrice' name='kegPrice' placeholder='Price($)' />
                <input type='text' id='kegFlavor' name='kegFlavor' placeholder='Flavor'/>
                <button type='submit'>Add Keg</button>
            </form>
            <style jsx>{`
                main {
                    height: 100vh;
                }
                
                h1 {
                    text-align: center;
                }
                
                form {
                    padding: 2em;
                    width: 50%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid #efefef;
                }

                form input, form button {
                    font-size: 20px;
                    border-radius: 4px;
                }

                form input {
                    width: 300px;
                    margin-bottom: 20px;
                    font-size: 20px;
                    border-radius: 4px;
                }
            `}</style>
        </main>
    )
}

export default NewKeg