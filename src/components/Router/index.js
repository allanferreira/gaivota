import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import routes from './routes'

export default ({children}) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                {routes.map((route, index) => 
                    <Route key={index} {...route}/>
                )}
            </Switch>
        </BrowserRouter>
    )
}

export { routes }
