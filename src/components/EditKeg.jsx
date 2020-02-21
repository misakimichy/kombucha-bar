import React from 'react'

const EditKeg = () => {
    return(
        <main>
            <h1>Edit Keg</h1>
            <form>
                <input type='text' id='kegName' name='kegName' placeholder='Keg Name' />
                <input type='text' id='kegBrand' name='kegBrand' placeholder='Keg Brand' />
                <input type='text' id='kegPrice' name='kegPrice' placeholder='Price($)' />
                <input type='text' id='kegFlavor' name='kegFlavor' placeholder='Flavor' />
                <button type='submit'>Add Keg</button>
            </form>
        </main>
    )
}

export default EditKeg