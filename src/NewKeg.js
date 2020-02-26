import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class NewKeg extends Component {
    state = {
        toHome: false
    }
    _name = React.createRef()
    _brand = React.createRef()
    _price = React.createRef()
    _flavor = React.createRef()

    handleNewForm = event => {
        event.preventDefault()
        console.log("New keg: ", this);
        this.props.onAddNewKeg({
            name: this._name.value,
            brand: this._brand.value,
            price: parseInt(this._price.value),
            flavor: this._flavor.value,
            pints: 124
        })
        this.setState({
            toHome: true
        })
    }

    render() {
        const { toHome } = this.state
        if(toHome) return <Redirect to ='/' />

        return(
            <main>
                <h1>Add New Keg</h1>
                <form onSubmit={this.handleNewForm}>
                    <input
                        id='kegName'
                        name='kegName'
                        type='text'
                        placeholder='Keg Name'
                        ref={input => {this._name = input}}
                    />
                    <input
                        id='kegBrand'
                        name='kegBrand'
                        type='text'
                        placeholder='Keg Brand'
                        ref={input => {this._brand = input}}
                    />
                    <input
                        id='kegPrice'
                        name='kegPrice'
                        type='number'
                        min='0'
                        placeholder='Price($)'
                        ref={input => {this._price = input}}
                    />
                    <input
                        id='kegFlavor'
                        name='kegFlavor'
                        type='text'
                        placeholder='Flavor'
                        ref={input => {this._flavor = input}}
                    />
                    <button type='submit'>Add Keg</button>
                </form>
            </main>
        )
    }
}

NewKeg.propTypes = {
    onAddNewKeg: PropTypes.func
}

export default NewKeg