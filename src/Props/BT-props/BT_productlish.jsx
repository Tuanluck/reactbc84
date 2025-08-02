import React from "react";
import BT_productitem from "./BT_productitem";
import DataProduct from "../../data/data_product.jsx"

const BT_productlish = () => {
  const renderProduct = () => {
    let arrJSX = [];
    for (let item of DataProduct) {
      let divProductItem = (
        <div className="col-md-4 mt2" key={item.id}>
          <BT_productitem dataItem={item}/>
        </div>
      );
      arrJSX.push(divProductItem);
    }
    return arrJSX
  };
  return (
    <div className="container">
      <h3>Bài tập product list</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
};

export default BT_productlish;
