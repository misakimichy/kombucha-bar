import React from 'react'
import InventoryKeg from './InventoryKeg'

const InventoryList = () => {
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
                <InventoryKeg 
                    key={keg.name}
                    name={keg.name}
                    brand={keg.brand}
                    pints={keg.pints}
                />  
            )}
        </main>
    )
}

export default InventoryList