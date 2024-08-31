import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CarItem from '../car-item/CarItem'
import { CarService } from '../../services/car.service'

const CarDetail = () => {

  const navigate = useNavigate()
  const goforward = () => navigate(-1)
    
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
          const data = await CarService.getById(id)

          setCar(data)
        }
        fetchData()
    }, [id])

    if(!car?.name) return <p>Loading...</p>

  return (
    <div>
      <Link onClick={goforward} className='goBack'>Go Back</Link>
      <CarItem car={car}/> 
    </div>
  )
}

export default CarDetail
