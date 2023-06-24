import React from 'react'
import Navbar from './Navbar'
import ShowRecipees from './ShowRecipees'

export const Home = () => {
  return (
    <div>
        <h1>Recipe Management System </h1>
        <Navbar />
        <ShowRecipees />
    </div>
  )
}
