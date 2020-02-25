import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class EditKeg extends Component {
    state = {
        toHome: false
    }
    _name = React.createRef()
    _brand = React.createRef()
    _price = React.createRef()
    _flavor = React.createRef()

    handleEditForm = (id, event) => {
        event.preventDefault()
        this.props.onEditKeg(id, {
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
                <h1>Edit Keg</h1>
                <form onSubmit={this.handleEditForm}>
                <input
                        id='kegName'
                        name='kegName'
                        type='text'
                        placeholder={this.props.location.state.name}
                        ref={input => {this._name = input}}
                    />
                    <input
                        id='kegBrand'
                        name='kegBrand'
                        type='text'
                        placeholder={this.props.location.state.brand}
                        ref={input => {this._brand = input}}
                    />
                    <input
                        id='kegPrice'
                        name='kegPrice'
                        type='number'
                        min='0'
                        placeholder={this.props.location.state.price}
                        ref={input => {this._price = input}}
                    />
                    <input
                        id='kegFlavor'
                        name='kegFlavor'
                        type='text'
                        placeholder={this.props.location.state.flavor}
                        ref={input => {this._flavor = input}}
                    />
                    <button type='submit'>Save the Change</button>
                </form>
            </main>
        )
    }
}

// EditKeg.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     brand: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     flavor: PropTypes.string.isRequired,
//     onEditKeg: PropTypes.func.isRequired
// }
export default EditKeg