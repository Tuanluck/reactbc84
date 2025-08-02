import React from 'react'

const BT_productitem = (props) => {
  let {dataItem} = props;
  return (
    <div className='card'>
        <img src={dataItem.image} alt="..."/>
        <div className='card-body'>
            <div className='card-title'>{dataItem.name}</div>
            <div className='card-text'>{dataItem.price}</div>
            <button className='btn btn-dark'>Detail</button>
        </div>
    </div>
  )
}

export default BT_productitem
