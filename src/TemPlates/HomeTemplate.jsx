import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from './HeaderHome'

//Template chứa các thành phần dùng chung của website

const HomeTemplate = () => {
    return (
        <div>
            <HeaderHome />
            {/* nội dung trang con hiển thị */}
            <Outlet />

            


        </div>
    )
}

export default HomeTemplate