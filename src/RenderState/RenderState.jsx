import React from 'react'
//state: là giá trị thay đổi làm cho giao diện thay đổi 
//state sẽ được tạo ra bởi hàm useState

const RenderState = () => {
  //tham số thứ 1: là giá trị state
    //tham số thứ 2: hàm setState thay đổi giá trị state và làm giao diện render lại
    let [isLogin, setLogin]  = useState(false);
    console.log(isLogin);
    const renderLogin = () => {
        if(isLogin){
            return <h3>Hello khải</h3>
        }
        return <button className='btn btn-dark' onClick={()=>{
            setLogin(true);
        }}>Login</button>
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

export default RenderState
