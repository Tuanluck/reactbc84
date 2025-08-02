import React from 'react'

const RenderCondition = () => {
    const isLogin = true;
    const renderLogin = () =>{
        if(isLogin){
            return <h3>Hello khải</h3>
        }
        return <button className='btn btn-dark'>Login</button>
    }
  return (
    <div className='header bg-dark text-white py-3'>
        <div className='d-flex justify-content-between'>
            <nav className='menu w-75 d-flex gap-3 align-items-center'>
                <a className='logo text-decoration-none fs-3 text-white'>Cybersoft</a>
                <a className='home text-decoration-none text-white'>Home</a>
                <a className='about text-decoration-none text-white'>About</a>
            </nav>
            <div className='login w-25 text-end'>
                {/* {isLogin == true ? <h3>Hello khải</h3>: <button className='btn btn-dark'>Login</button>} */}
                {renderLogin()}
            </div>
        </div>


    </div>
  )
}

export default RenderCondition
