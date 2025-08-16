import { Table, Typography } from "antd";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ReduxShopingPage = () => {
  const { carts } = useSelector((state) => state.product);


  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      render: (value,item)=>{
        return <NavLink>
          <img src={value} alt={item.alias} width={50} height={50} />
        </NavLink>
      }
    },
    
  ];

  return (
    <div>
      <Typography.Title>
        Sản phẩm trong giỏ hàng ({carts.length})
      </Typography.Title>
      <Table dataSource={carts} columns={columns} />;
    </div>
  );
};

export default ReduxShopingPage;
