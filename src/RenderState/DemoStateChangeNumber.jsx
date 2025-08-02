import React, { useState } from 'react'

const DemoStateChangeNumber = () => {
    let [number,setNumber] = useState(10);
  return (
    <div className='container'>
        <h3>Number: <span className='text-danger'>{number}</span></h3>
        <button className='btn btn-success' onClick={()=>{
           setNumber(number+1);
        }}>+</button>
        <button className='mx-2 btn btn-dark' onClick={()=>{
           setNumber(number-1);
        }}>-</button>

    </div>
  )
}

export default DemoStateChangeNumber
