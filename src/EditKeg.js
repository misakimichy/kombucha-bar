import React, {Component} from 'react'
import PropTypes from 'prop-types'

class EditKeg extends Component {
    state = {
        toHome: false
    }

    handleEditForm = event => {
        event.preventDefault()
        // this.props.onAddNewKeg
    }

    render() {
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

EditKeg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
}
export default EditKeg