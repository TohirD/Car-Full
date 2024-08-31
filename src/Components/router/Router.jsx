import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import CarDetail from '../car-detail/CarDetail'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home/>} path="/"/> 
        <Route element={<CarDetail/>} path="/car/:id"/> 

        <Route path='*' element={<div>Not found</div>}/> 
      </Routes>
    </div>
  )
}

export default Router
