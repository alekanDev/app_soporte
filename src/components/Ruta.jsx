import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

const Ruta = ({route, name}) => {

    let location = useLocation()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        // console.log(location, route)
        if(location.pathname===route){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [location, route])
    
    return(
        <Link to={route}>
            <button className={isActive ? 'btnMenu btnMenu_on':'btnMenu'}>{name}</button>
        </Link>
    )
}

export default Ruta