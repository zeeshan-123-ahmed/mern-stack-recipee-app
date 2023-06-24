import React from 'react'
import Navbar from './src/components/Navbar'
import ShowRecipees from './src/components/ShowRecipees'

export const Home = () => {
  return (
    <div>
        <h1>Recipe Management System </h1>
        <Navbar />
        <ShowRecipees />
    </div>
  )
}
