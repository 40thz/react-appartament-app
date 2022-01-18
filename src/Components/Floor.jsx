import React from 'react'
import { Link } from 'react-router-dom'
import floors from '../floors'

const Floor = () => {
    return (
        <svg>
            {
                floors.map((item) => (
                    <Link to={`/insidefloor/${item.id}`} key={item.id} className="house__floor">
                        {item.path}
                    </Link>
                ))
            }
        </svg>
    )
}

export default Floor
