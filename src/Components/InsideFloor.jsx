import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HeaderModal from './Modal/HeaderModal'

const InsideFloor = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [appartaments, setApartaments] = React.useState([])
    const [reverse, setReverse] = React.useState([])
    const [currentFlat, setCurrentFlat] = React.useState(null)
    const ref = React.useRef()

    let flats = [[], []]

    React.useEffect(() => {
        const arr = []
        const currentFloor = parseInt(params.floor) - 1
        const floorIndex = currentFloor * 6
        for (let i = 1; i <= 6; i++) {
            const apartament = {
                id: floorIndex + i,
                img: 'https://40thz.github.io/apartments-rent-app/floor.png'
            }
            arr.push(apartament)
        }
        setApartaments(arr)
        console.log(params)
    }, [params])

    React.useEffect(() => {
        appartaments.map((item, index) => (
            flats[index < 3 ? 0 : 1].push(
                <div onMouseOver={() => setCurrentFlat(item.id)} onClick={() => navigate(`${item.id}`)} className='flat'>
                    <img src={item.img} alt="" />
                </div>)
        ))
        setReverse(flats)
    }, [appartaments])

    return (
        <div>
            <div ref={ref} className="modal__floor__container">

                <div className="modal__floor">
                    <HeaderModal name='выбор квартиры' />

                    <div className="modal__floor-main">
                        <div className='left'>
                            {reverse[0]}
                        </div>
                        <div className="counter">
                            <h1>Номер квартиры</h1>
                            <span>{currentFlat && currentFlat}</span>
                        </div>
                        <div className='right'>
                            {reverse[1]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsideFloor
