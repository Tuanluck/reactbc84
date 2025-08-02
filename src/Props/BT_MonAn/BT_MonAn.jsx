import { useState } from 'react'
import RenderMonAn from './RenderMonAn'

const BT_MonAn = () => {
  const [monAn , setMonAn] = useState(["Phở" , "Bún bò" , "Bánh mì" , "Cơm tấm"])


  const dauBepThemMonAnMoi = (monMoiNhanTuPhucVu)=>{
    setMonAn([...monAn, monMoiNhanTuPhucVu]);
  }

  return (
  <RenderMonAn
  monAn={monAn}
  nguoiPhucVu={(monMoiNhanTuKhach)=>{
    console.log("Món mới được gọi là: ", monMoiNhanTuKhach);
    dauBepThemMonAnMoi(monMoiNhanTuKhach);
  }} 
  // nguoiPhucVu={dauBepThemMonAnMoi}
  />
  )
}

export default BT_MonAn 