import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-5 '>
        <div className='rounded-xl py-7 px-8 w-[40%] bg-red-400'>
            <h2 className='text-2xl font-semibold'>1</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-7 px-9 w-[40%] bg-blue-400'>
            <h2 className='text-2xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl py-7 px-9 w-[40%] bg-green-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl py-7 px-9 w-[40%] bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers