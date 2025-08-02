import React from 'react'

const DataBinding = () => {

   const title = "cybersoft";
   const linkAnh = "https://dummyimage.com/600x400/000/fff?text=abc";

   const renderTitle = () => {

        //Nội dung return nếu là jsx thì phải có 1 thẻ bao phủ
        return <header> 
            title
        </header>
   }
   const tinhTong = (a,b) => {
    return a+b;
   }
   //{}: interpolation
  return (
    <div className='container'>
        <h3>Data binding</h3>
        <p>{title}</p>
        <img src={linkAnh} alt='ảnh' />
        <input defaultValue={title}  className='d-block w-25' />
        {renderTitle()}
        <h3 className='display-4'>  
            {tinhTong(3,5)}
        </h3>

    </div>
  )
}

export default DataBinding