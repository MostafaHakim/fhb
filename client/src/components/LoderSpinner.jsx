import React from 'react'
import HashLoader from "react-spinners/HashLoader"


function LoderSpinner() {
  return (
    <div className='w-full h-screen absolute top-0 left-0 r-0 bottom-0 flex flex-col items-center justify-center bg-white bg-opacity-40'>
      <HashLoader color="#0abde3" />
      {/* <ClipLoader color="#67f2d1" /> */}
    </div>
  )
}

export default LoderSpinner