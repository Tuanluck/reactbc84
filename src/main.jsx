import { createRoot } from "react-dom/client";
import "./css/index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ToDoListApi from "./API/TodoListApi";
import HomeIndex from "./Pages/HomeIndex";
import Login from "./Pages/Login";
import ProductsPage from "./API/ProductsPage";
import HeaderHome from "./TemPlates/HeaderHome";
import FooterHome from "./TemPlates/FooterHome";
import Register from "./Pages/Register";
import HomeTemplate from "./TemPlates/HomeTemplate";
import DemoUseNavigate from "./Pages/ReactRouterDom/DemoUseNavigate";
import ForGotPass from "./Pages/ReactRouterDom/ForGotPass";
import DemoUseParams from "./Pages/ReactRouterDom/DemoUseParams";
import DemoUseSearchParam from "./Pages/ReactRouterDom/DemoUseSearchParam";
import AntdDemo from "./AntdDemo/AntdDemo";
import ReduxProductsPage from "./Products";
import ReduxShopingPage from "./ReduxShopingCart/ReduxShopingPage";
import { Provider } from "react-redux";
import {store} from './redux/Store';
import ChangeNumberRedux from "./Pages/DemoRedux/ChangeNumberRedux";
/*
  Phân biệt state và props:
  state: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị ( state,setState)
  props: giá trị có thể thay đổi dùng để binding lên giao diện, props không thể gán lại giá trị (readonly)
*/

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider  store={store}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomeIndex />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/antd" element={<AntdDemo />}></Route>
          <Route path="/redux-change-number" element={<ChangeNumberRedux />} />
          <Route path="/redux-product" element={<ReduxProductsPage />}></Route>
          <Route
            path="/redux-shopping-cart"
            element={<ReduxShopingPage />}
          ></Route>
        </Route>
        <Route
          path="api"
          element={
            <div>
              <HeaderHome></HeaderHome>
              <Outlet />
              <FooterHome />
            </div>
          }
        >
          <Route path="todoList" element={<ToDoListApi />}></Route>
          <Route path="productpage" element={<ProductsPage />}></Route>
        </Route>
        <Route path="react-router-dom">
          <Route path="demo-use-navigate" element={<DemoUseNavigate />}></Route>
          <Route path="forgot-password" element={<ForGotPass />}></Route>
          <Route
            path="use-search-param"
            element={<DemoUseSearchParam />}
          ></Route>
        </Route>
        <Route path="demo-use-param">
          <Route
            path=":id"
            element={
              <>
                <HeaderHome />
                <DemoUseParams />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
