import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ItemProduct from "../ItemProduct";

const DemoUseSearchParam = () => {
  const [arrSearchProd, setArrSearchProd] = useState([]);
  const frmSearch = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: (value) => {
      let { keyword } = value;
      setSearchParam({
        k: keyword,
      });
    },
  });

  const getApiProdAll = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`,
        method: "GET",
      });
      setArrSearchProd(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  const [searchParam, setSearchParam] = useSearchParams("");
  const keyword = searchParam.get("k");

  useEffect(() => {
    getApiProdAll();
  }, [keyword]);
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Tìm kiếm sản phẩm</h2>

      {/* Form tìm kiếm */}
      <form className="mb-4" onSubmit={frmSearch.handleSubmit}>
        <div className="row g-2">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên sản phẩm..."
              name="keyword"
              onChange={frmSearch.handleChange}
            />
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-primary">
              Tìm kiếm
            </button>
          </div>
        </div>
      </form>

      {/* Kết quả tìm kiếm */}
      <div className="row g-4">
        {arrSearchProd.map((item, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <ItemProduct item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseSearchParam;
