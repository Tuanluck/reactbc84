
const BT_GioHang = (props) => {
    const {gioHang , xoaSanPham,tangSoLuong , giamSoLuong } = props;
  return (
    <div>
        <h3 className='text-right'>Giỏ hàng</h3>
         <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {gioHang.map((item,index)=>{
                    return <tr key={index}>
                  <td>{item.maSP}</td>
                  <td>
                    <img
                      src={item.hinhAnh}
                      alt="VinSmart Live"
                      width={50}
                    />
                  </td>
                  <td>{item.tenSP}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-1" onClick={() => giamSoLuong(item.maSP)} >-</button>
                    {item.soLuong}
                    <button className="btn btn-primary btn-sm ms-1" onClick={() => tangSoLuong(item.maSP)} >+</button>
                  </td>
                  <td>{item.giaBan}</td>
                  <td>{item.soLuong * item.giaBan}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>xoaSanPham(item.maSP)}>Xóa</button>
                  </td>
                </tr>
                })}
              </tbody>
            </table>
    </div>
  )
}

export default BT_GioHang