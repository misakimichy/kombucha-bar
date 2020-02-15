import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import KegList from './KegList'
import EditKeg from './EditKeg'
import NewKeg from './NewKeg'
import InventoryList from './InventoryList'
import Footer from './Footer'
import NotFound404 from './NotFound404'

const App = () => {
    return (
        <div className='component-root'>
            <Header />
            <Switch>
                <Route exact path='/' component={KegList} />
                <Route exact path='/add-new' component={NewKeg} />
                <Route exact path='/edit' component={EditKeg} />
                <Route exact path='/inventory' component={InventoryList} />
                <Route component={NotFound404} />
            </Switch>
            <Footer />
            <style jsx>{`
                .component-root {
                    font-family: arial, sans-serif;
                    font-size: 18px;
                }
            `}</style>
        </div>
    )
}

export default App