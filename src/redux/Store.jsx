import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product';

//Khi bất kì dispatch nào được gọi thì tất cả reducer đều chạy hết
export const store = configureStore({
    reducer: {
        //state sẽ chứa trong store
        numberReducer: (state = 10, action) => {
            // console.log('hàm 1');
            //action = {type: 'ten_action', payload: data }
            if (action.type == 'CHANGE_NUMBER_ACTION') {
                state += action.payload
            }
            return state; //imutable {...state} [...state]  ]//hàm không phải 1 giá trị (chạy khi ứng dụng start và mỗi khi state thay đổi)
        },
        imgCarReducer: (state = "img",action) => {
            // console.log('hàm 2');
            
            return state
        },
        product: productSlice
    }
});
