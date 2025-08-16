import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, NavLink } from "react-router-dom";

const TableDemo = () => {
  const [arrProduct, setArrProduct] = useState([]);
const dataColum = [
    {
        title: 'id',
        dataIndex: 'id',
        index: 'id'
    },
    {
        title: 'Product',
        dataIndex: 'name',
        index: 'name'
    },
    {
        title: 'image',
        dataIndex: 'image',
        index: 'image',
        render: (value, item) => {
            return (
                <NavLink to={`/demo-use-param/${item.id}`}>
                    <img src={value} alt={item.alias} width={50} height={50} />
                </NavLink>
            );
        }
    },
    {
        title: 'Action',
        dataIndex: 'action',
        index: 'action',
        render: (value, item) => {
            return (
                <div style={{ display: 'flex', gap: 8 }}>
                    <button
                        style={{
                            background: '#1677ff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 4,
                            padding: '4px 12px',
                            cursor: 'pointer'
                        }}
                    >
                        Edit
                    </button>
                    <button
                        style={{
                            background: '#ff4d4f',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 4,
                            padding: '4px 12px',
                            cursor: 'pointer'
                        }}
                    >
                        Delete
                    </button>
                </div>
            );
        }
    },
];
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
  return <div>
    <Table columns={dataColum} dataSource={arrProduct}/>
  </div>;
};

export default TableDemo;
