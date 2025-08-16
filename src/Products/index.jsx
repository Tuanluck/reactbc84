import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../redux/product";
import { setAddToCart } from "../redux/product";
import { Row, Typography, Col, Card,Button } from "antd";

const { Meta } = Card;

const ReduxProductsPage = () => {
  const { list } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const getProductApiAxios = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product`,
        method: "GET",
      });
      const products = res.data.content;
      dispatch(setProductList(products));
      //Sau khi lấy dữ liệu từ api về thì setState

      console.log(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //function hook useEffect
    //Sau khi html được khởi tạo lần đầu tiên và sau mỗi lần setState (bất kì state nào)
    getProductApiAxios();
  }, []);
  const HandleAddToCart = (item)=>{

    dispatch(setAddToCart(item))
  }
  return (
    <div className="container">
      <Typography.Title>Product List</Typography.Title>
      <Row gutter={[32, 32]}>
        {list.map((item) => {
          return (
            <Col span={6} key={item.id}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={<img alt={item.name} src={item.image} />}
              >
                <Meta title={item.name} description={item.description} />
                <Button type="primary" onClick={()=>{
                  HandleAddToCart(item)
                }}>Thêm vào giỏ hàng</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ReduxProductsPage;
