import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";

const HomeIndex = () => {
  const [arrProduct, setArrProduct] = useState([]);

  const getAllProductApi = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product`,
        method: "GET",
      });
      console.log("dữ liệu:", res.data.content);
      // lấy dữ liệu đưa vào state;
      setArrProduct(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProductApi();
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Sản phẩm nổi bật</h1>
      <div className="row g-4">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
             <ItemProduct item={item}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeIndex;
