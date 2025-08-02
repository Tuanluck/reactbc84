import React from 'react'
import CardProduct from './CardProduct'
import ChildComponent from './ChildComponents'

const DemoProps = (props) => {
    let sp1 = {
        id:1,
        name:'iphone',
        price: 1000,
        img : 'https://dummyimage.com/600x400/000/fff?text=iphone'        
    }
    let sp2={
        id:2,
        name:'iphone',
        price: 200,
        img : 'https://dummyimage.com/600x400/000/fff?text=iphone'
    }
  return (
        <div className='container'>
            <h3>Props (properties component)</h3>
            <ChildComponent noiDung="tiêu đề 1" />
            <ChildComponent noiDung="tiêu đề 2" />
            <ChildComponent noiDung="tiêu đề 3" />
            <div className='row'>
                <div className='col-3'>
                    <CardProduct product={sp1} />
                </div>
                <div className='col-3'>
                    <CardProduct product={sp2} />
                </div>
            </div>
        </div>
    )
}

export default DemoProps
