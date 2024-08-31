import React, { useState } from 'react'
import './CreateCarForm.css'
import { useMutation, useQueryClient } from 'react-query'
import { CarService } from '../../services/car.service'
import { useForm } from 'react-hook-form'

const clearData = {
    price: '',
    name: '',
    image: ''
}

const CreateCarForm = () => {

    // const [name, setName] = useState('')
    // const [price, setPrice] = useState('')
    // const [image, setImage] = useState('')

    // const createCar = e => {
    //     e.preventDefault()
    //     setCars(prev => [...prev, {id: prev.length + 1, name, price, image}])

    // }

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
      mode: 'onChange'
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], (data) => CarService.create(data), {
      onSuccess: () => {
        queryClient.invalidateQueries('cars')
        reset()
      }
    })

    const createCar = data => {
        mutate(data)
        // setCars(prev => [...prev, {id: prev.length + 1, ...data}])
    }

  return (
    <form className='form' onSubmit={handleSubmit(createCar)}>
      <input {...register('name', {required: 'Name is required'})} placeholder='Name' />
      <input {...register('price', {required: 'Price is required'})} placeholder='Price' />
      <input {...register('image', {required: 'Image is required'})} placeholder='Image' />
      <button>Create</button>
    </form>
  )
}

export default CreateCarForm
 