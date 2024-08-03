import React from 'react'
import DotLoader from 'react-spinners/DotLoader'

function LoderSpinner() {
  return (
    <div className='w-full absolute top-0 left-0 flex flex-col items-center justify-center'>
        <DotLoader color="#67f2d1" />
    </div>
  )
}

export default LoderSpinner