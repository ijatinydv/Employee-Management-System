import React from 'react'
import Header from '../layout/Header'
import TaskStats from '../layout/TaskStats'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen text-white'>
      <Header/>
      <TaskStats/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard