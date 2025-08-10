import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemProduct from "../ItemProduct";

const DemoUseParams = () => {
  const [productDetail, setProductDetail] = useState({});
  const [rotateDeg, setRotateDeg] = useState("rotate(0deg)");
  const param = useParams();
  const getApiProdDetail = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.id}`,
        method: "GET",
      });

      setProductDetail(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiProdDetail();
  }, [param.id]);
  return (
    <div className="container">
      <div>
        {/* Sản phẩm chính */}
        <h1 className="mb-4 text-center">Chi tiết sản phẩm</h1>
        <div className="row mb-5">
          <div className="col-md-5">
            <div className="border">
              <img
                style={{ transform: rotateDeg }}
                src={productDetail.image}
                className="img-fluid rounded "
                alt={productDetail.alias}
              />
            </div>

            <div className="d-flex mt-2 w-full">
              {productDetail.detaildetailedImages?.map((rotateValue, i) => {
                return (
                  <div
                    key={i}
                    className="border me-2 cursor-pointer"
                    onClick={() => {
                      setRotateDeg(rotateValue);
                    }}
                  >
                    <img
                      src={productDetail.image}
                      style={{
                        transform: rotateValue,
                        width: "100px",
                        margin: "10px",
                        marginTop: "20px",
                      }}
                      alt={`ảnh góc ${rotateValue}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-7">
            <h2>{productDetail.name}</h2>
            <p className="text-muted">{productDetail.description}</p>
            <h4 className="text-danger">${productDetail.price}</h4>
            <p>
              <strong>Size:</strong>
              {productDetail.size?.map((s, i) => {
                return (
                  <span
                    key={i}
                    className="badge bg-gray-500 ms-2 hover:bg-gray-400 cursor-pointer"
                  >
                    {s}
                  </span>
                );
              })}
            </p>
            <p>
              <strong>Số lượng:</strong> {productDetail.quantity}
            </p>
            <button className="btn btn-primary">Thêm vào giỏ</button>
          </div>
        </div>
        {/* Sản phẩm liên quan */}
        <h2 className="mb-4">Sản phẩm liên quan</h2>
        <div className="row g-4">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <ItemProduct item={item} />
              </div>
            );
          })}
          {/* sp liên quan 1 */}
        </div>
      </div>
    </div>
  );
};

export default DemoUseParams;
