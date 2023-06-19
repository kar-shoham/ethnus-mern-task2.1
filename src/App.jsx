import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TaskOne from './components/TaskOne'
import TaskTwo from './components/TaskTwo'
import TaskFive from './components/TaskFive'
import TaskFour from './components/TaskFour'
import TaskThree from './components/TaskThree'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/task-1' element={<TaskOne/>}/>
        <Route path='/task-2' element={<TaskTwo/>}/>
        <Route path='/task-3' element={<TaskThree/>}/>
        <Route path='/task-4' element={<TaskFour/>}/>
        <Route path='/task-5' element={<TaskFive/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App