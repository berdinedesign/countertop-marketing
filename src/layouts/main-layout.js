import React from 'react'
import '../assets/styles/custom.scss'

import TopMenu from '../components/core/topmenu'

export default ({ children }) => {
    return ( 
        <div>
            <TopMenu />
            {children}
        </div>
    )
}