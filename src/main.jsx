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
/*
  Phân biệt state và props:
  state: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị ( state,setState)
  props: giá trị có thể thay đổi dùng để binding lên giao diện, props không thể gán lại giá trị (readonly)
*/

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<HomeIndex />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
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
        <Route path="use-search-param" element={<DemoUseSearchParam/>}></Route>
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
  </BrowserRouter>
);
