import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '@/components/Router'

export default () => {

    const openRoutes = routes.filter(route => route.hidden !== true) 

    return (
        <ul>
            {openRoutes.map((route, index) => 
                <li key={index}>
                    <Link to={route.path}>
                        {route.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}
