import React from 'react'

const TaskStats = () => {
  return (
    <div className='flex justify-between items-center mt-16 screen gap-11'>
        <div className='bg-red-400 px-9 py-6 w-[45%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-400 px-9 py-6 w-[45%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Completed</h3>
        </div>
        <div className='bg-green-400 px-9 py-6 w-[45%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Accepted</h3>
        </div>
        <div className='bg-yellow-500 px-9 py-6 w-[45%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskStats