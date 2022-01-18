import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HeaderModal from './Modal/HeaderModal'

const Product = () => {
    const params = useParams()
    const ref = React.useRef()
    const navigate = useNavigate()


    return (
        <div>
            <div className="modal__floor__container">

                <div className="modal__floor">
                    <HeaderModal name={`квартира ${params.appartament}`} />
                </div>
            </div>
        </div>
    )
}

export default Product
