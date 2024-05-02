import React from 'react'
import InputBox from './InputBox';

export default function MainFile() {
    

  return (
    <div className='w-full h-full bg-gray-100'>
      <div className="bg-white w-full" style={{ height: window.innerHeight - (4 * 20) }}>

      </div>
      <div className="h-16 flex relative top-2 justify-center items-center">
        <InputBox/>
      </div>
    </div>
  )
}
