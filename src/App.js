import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { v4 } from 'uuid'
import Header from './Header'
import KegList from './KegList'
import EditKeg from './EditKeg'
import NewKeg from './NewKeg'
import InventoryList from './InventoryList'
import Footer from './Footer'
import NotFound404 from './NotFound404'
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            kegList: {}
        }
    }

    handleAddNewKeg = newKeg => {
        const kegId = v4()
        const newKegList = Object.assign({}, this.state.kegList, {
            [kegId]: newKeg
        })
        this.setState({
            kegList: newKegList
        })
    }

    handleEditInfo = (id, editedKeg) => {
        const thisKeg = Object.keys(this.state.kegList).find(kegId => kegId === id)
        const newKeg = Object.assign({}, this.state.kegList, {
            [thisKeg]: editedKeg
        })
        this.setState(({
            [thisKeg]: newKeg
        }))
    }

    render() {
        const { kegList } = this.state
        return (
            <div className='component-root'>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <KegList kegList={kegList}/>} />
                    <Route exact path='/add-new' render={() => <NewKeg onAddNewKeg={this.handleAddNewKeg} />} />
                    <Route exact path='/edit' render={props => <EditKeg onEditKeg={this.handleEditInfo} {...props} />} />
                    <Route exact path='/inventory' component={InventoryList} />
                    <Route component={NotFound404} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App