import React, { useEffect, useState } from 'react'
import CarItem from '../car-item/CarItem'
import CreateCarForm from '../create-car-form/CreateCarForm'
import { CarService } from '../../services/car.service'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

function Home() {
    const {data, isLoading, error} = useQuery('cars', () => CarService.getAll(),)

    // const [cars, setCars] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await CarService.getAll()

    //         setCars(data)
    //     }
    //     fetchData()
    // }, [])

    const navigate = useNavigate()
    const goBack = () => navigate(1)

    if(isLoading) return 'Loading...'
  return (
    <div>
      <h1>Cars Catalog</h1>
        <button onClick={goBack}>Forward</button>
        <CreateCarForm/>
        {data.map(car => (
            <CarItem key={car.id} car={car}/>
        ))}

    </div>
  )
}

export default Home
