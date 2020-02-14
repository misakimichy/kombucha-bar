import React from 'react'

const NewKeg = () => {
    return(
        <main>
            <h1>Add New Keg</h1>
            <form>
                <label for='kegName'>Keg Name:</label>
                <input type='text' id='kegName' name='kegName' />
                <label for='kegBrand'>Keg Brand:</label>
                <input type='text' id='kegBrand' name='kegBrand' />
                <label for='kegPrice'>Keg Price($):</label>
                <input type='text' id='kegPrice' name='kegPrice' />
                <label for='kegFlavor'>Keg Flavor:</label>
                <input type='text' id='kegFlavor' name='kegFlavor' />
            </form>
        </main>
    )
}

export default NewKeg