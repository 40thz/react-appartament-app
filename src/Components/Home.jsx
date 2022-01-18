import React from 'react'
import Floor from './Floor'

const Home = () => {
    return (
        <div className="container">
            <div className="house__wrapper">
                <div className="house">
                    <Floor />
                    <img src="/flat.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
