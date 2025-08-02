import React from 'react'

const HandleEvent = () => {
    const Handleclick = (e) => {
    e.target.classList.toggle('btn-success');
    e.target.classList.toggle('btn-dark');
  };
  return (
    <div>
      <h3>HandleEvent</h3>
        <button className='btn btn-success' onClick={(e)=>{
            e.target.className='btn btn-dark'
        }}>Click me !</button>
        <button className='btn btn-success' onClick={Handleclick}>Click me !</button>
        <button className='btn btn-success' onClick={Handleclick}>Click me !</button>
    </div>
  )
}

export default HandleEvent
