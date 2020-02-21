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
        },
        {
            name: 'keg name2',
            brand: 'brand name2',
            price: 200,
            flavor: 'flavor2',
            pints: 124
        },
        {
            name: 'keg name3',
            brand: 'brand name3',
            price: 300,
            flavor: 'flavor3',
            pints: 124
        },
        {
            name: 'keg name4',
            brand: 'brand name4',
            price: 400,
            flavor: 'flavor4',
            pints: 124
        }
    ]
    return(
        <main>
            <h1>Our Keg List</h1>
            <section className='keg-container'>
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
            </section>
        </main>
    )
}

export default KegList