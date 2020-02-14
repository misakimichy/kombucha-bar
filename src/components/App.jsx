import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from './NotFound'

const App = () => {
    return (
        <div>
            {/* Render components here */}
            <Switch>
                {/* <Route exact path='/' component={} /> */}
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default App