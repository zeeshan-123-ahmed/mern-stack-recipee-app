import React from 'react'
import Navbar from './Navbar'
import ShowRecipees from './ShowRecipees'
import { AddRecipee } from './AddRecipee'

export const Home = () => {
  return (
    <div>
        <h1>Recipe Management System </h1>
        <Navbar />
        <ShowRecipees />
        <Routes>
          <Route path="/recipees" component={ShowRecipees}></Route>
          <Route path='/addrecipee' component={AddRecipee} />
          <Route path='/updaterecipee' component={UpdateRecipee} />
        </Routes>

    </div>
  )
}
