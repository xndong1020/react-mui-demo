import React from 'react'
import MainLayout from './layouts/MainLayout'
import ExercisesContext from '../context/ExercisesContext'
import { muscles, exercises } from '../store'

const App = () => {
  return (
    <ExercisesContext.Provider value={{ muscles, exercises }}>
      <MainLayout />
    </ExercisesContext.Provider>
  )
}

export default App
