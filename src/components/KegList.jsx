import React from 'react'
import Keg from './Keg'

const KegList = () => {
    const data = [
        {
            name: 'keg name',
            brand: 'brand name',
            price: 100,
            flavor: 'flavor',
            pints: 124
        }
    ]
    return(
        <main>
            {data.map(keg => 
                <Keg 
                    key={keg.name}
                    name={keg.name}
                    brand={keg.brand}
                    price={keg.price}
                    flavor={keg.flavor}
                    pints={keg.pints}
                />  
            )}
        </main>
    )
}

export default KegList