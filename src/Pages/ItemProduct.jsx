import React from 'react'
import { NavLink } from "react-router-dom";

const ItemProduct = (props) => {
    const {item} = props;
  return (
     <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: 250, objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold text-danger">{item.price}$</p>
                      <p className="fw-bold text-gray-500">{item.quantity}</p>
                    </div>
                    
                    <NavLink className="btn btn-primary w-100" to={`/demo-use-param/${item.id}`}>
                      View Detail
                    </NavLink>
                  </div>
                </div>
              </div>
  )
}

export default ItemProduct
