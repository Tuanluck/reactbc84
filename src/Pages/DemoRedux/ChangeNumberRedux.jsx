import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
const ChangeNumberRedux = () => {
    //Lấy dữ liệu từ redux về component
    const number = useSelector(state => state.numberReducer); 
    const dispatch = useDispatch(); //hàm này dùng để đưa dữ liệu lên redux store
    return (
        <div className='container'>
            <h3>Change number redux</h3>
            <h3>number : {number}</h3>
            <button className='btn btn-success' onClick={()=>{
                const actionOb = {
                    type:'CHANGE_NUMBER_ACTION',
                    payload: 1
                }
                //Dùng hàm dispatch -> gửi action đi
                dispatch(actionOb);


            }}>+</button>
            <button className='btn btn-success mx-2' onClick={()=>{
                const actionOb = {
                    type:'CHANGE_NUMBER_ACTION',
                    payload: -1
                }
                //Dùng hàm dispatch -> gửi action đi
                dispatch(actionOb);

            }}>-</button>
        </div>
    )
}

export default ChangeNumberRedux
//compare : primitive value, reference value
// let obA = {id : 1,name: "A"}; // 001
// let obB = {name: "A",id:1 }; //002
// console.log(_.isEqual(obA,obB));
