import React from 'react'

const Loader = () => {
  return (
    <div className='absolute inset-0 flex justify-center items-center bg-slate-200/80 backdrop-blur-sm '>
    <div className='loader'></div>
    </div>
  )
}

export default Loader