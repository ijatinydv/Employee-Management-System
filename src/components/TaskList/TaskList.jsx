import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] w-full mt-12 py-7 flex justify-start gap-7 overflow-x-auto flex-nowrap'>
        <div className='flex-shrink-0 h-full p-5 w-[350px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4>20 feb 2024</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Prepare for CM viva</h2>
            <p className='mt-2'>task jaisa kbhi nhi dekha hoga</p>
        </div>
    </div>
  )
}

export default TaskList