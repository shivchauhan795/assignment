import React from 'react'

const notFound = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen gap-3'>
        <div className='text-2xl font-bold uppercase'>

          This page is not available!!
        </div>
        <div className='flex justify-center items-center gap-2'>

          <div className='text-lg font-semibold '>
            Visit:
          </div>
          <div className='text-blue-600 text-lg font-medium'>
            <a href='/services'>https://shivassignment.vercel.app</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default notFound
