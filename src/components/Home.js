import React from 'react'
import Habits from './Habit'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar name="Detail View"/>
      <Habits/>
    </>
  )
}

export default Home