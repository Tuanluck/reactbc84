
import axios from 'axios'; 
import React, { useState, useEffect } from 'react';


const ProductsPage = () => {
    // eslint-disable-next-line no-undef
    const [arrProduct, setArrProduct] = useState([]);
  //   const getAllProductApi = async () => {
  //     try {
  //       let res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product`);
  //       let data = await res.json();
  //       console.log(data.content);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const getProductApiAxios = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product`,
        method: "GET",
      });
      //Sau khi lấy dữ liệu từ api về thì setState
      setArrProduct(res.data.content);
      console.log(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  // eslint-disable-next-line no-undef
  useEffect(() => {
    //function hook useEffect
    //Sau khi html được khởi tạo lần đầu tiên và sau mỗi lần setState (bất kì state nào)
    getProductApiAxios();
  }, []); //state dependencies: thì state nào liệt kê trong mảng thay đổi thì hàm này mới gọi lại. Nếu là mảng rỗng (không phụ thuộc vào state nào ) 
  return (
    <div className="container ">
      {/* <button
        className="p-2 bg-amber-400"
        onClick={() => {
          getAllProductApi();
        }}
      >
        call api products
      </button> */}
      {/* <button
        className="p-2 bg-amber-700"
        onClick={() => {
          getProductApiAxios();
        }}
      >
        call api products
      </button> */}
      <h3>Products List</h3>
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-3 mt-2" key={index}>
              <div className="card">
                <img src={item.image} />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button className="btn btn-success">Detail</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage
