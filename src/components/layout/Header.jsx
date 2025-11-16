import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> Jatin Yadav 😉</span></h1>
        <button className='bg-red-500 tex-white px-5 py-2 rounded-xs text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header