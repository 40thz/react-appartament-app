import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderModal = ({ name }) => {
    const navigate = useNavigate()

    return (
        <div className="modal__floor-header">
            <div className="modal__floor-header-title">
                {name}
            </div>
            <div onClick={() => navigate(-1)} className="modal__floor-header-close">
                <img src="https://40thz.github.io/apartments-rent-app/img/close-icon.svg" alt="" />
            </div>
        </div>
    )
}

export default HeaderModal
