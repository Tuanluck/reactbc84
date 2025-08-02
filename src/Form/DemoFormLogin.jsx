import React, { useState } from "react";
// Nhập hook useState từ React để quản lý state trong functional component

const DemoFormLogin = () => {
  // Khởi tạo state `userLogin` để lưu dữ liệu từ các ô input
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
    email: "",
  });

  // Khởi tạo state `error` để lưu thông báo lỗi tương ứng với mỗi ô input
  const [error, setError] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [valid, setValid] = useState(true);

  // Hàm xử lý khi người dùng thay đổi giá trị trong ô input
  const HandleChangeInput = (e) => {
    // Lấy id (chính là tên trường dữ liệu: username, email, password) và giá trị người dùng nhập
    let { id, value } = e.target;

    // Cập nhật state userLogin bằng cách tạo một object mới
    let newUserLogin = { ...userLogin, [id]: value };

    // Xử lý lỗi: nếu người dùng bỏ trống, gán thông báo lỗi tương ứng
    let newError = { ...error };
    if (value.trim() === "") {
      newError[id] = `${id} cannot be blank!`;
    } else {
      newError[id] = ""; // Xóa lỗi nếu có nhập lại
      switch (id) {
        case "email":
          {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
              newError[id] = `${id} is invalid`;
            }
          }
          break;
        case "password": {
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\s\S]{8,32}$/;
          if (!passwordRegex.test(value)) {
            newError[
              id
            ] = `Password must be 8–32 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.`;
          }
        }
      }
    }

    // Cập nhật lại state mới cho userLogin và error
    setUserLogin(newUserLogin);
    setError(newError);
     checkValidForm(newUserLogin,newError);
  };

  console.log(userLogin); // Hiển thị dữ liệu nhập vào trong console để debug
  const HandleSubmit = (e) => {
    e.preventDefault();
    if(!valid){
        return;
    }
    console.log("submit");
  };
  const checkValidForm = (newUserLogin,newError)=>{
    for(let key in newUserLogin){
        if(newUserLogin[key].trim()==''){
            setValid(false);
            return;
        }
    }
    for(let key in newError){
        if(newError[key] !== ''){
            setValid(false);
            return;
        }
    }
    setValid(true);
  }
 

  return (
    // Bắt đầu form
    <form className="container" onSubmit={HandleSubmit}>
      <div className="w-50 mx-auto">
        <h3>Login</h3>

        {/* Ô nhập username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            id="username"
            onChange={HandleChangeInput}
          />
          {/* Hiển thị lỗi nếu có */}
          <p className="text-danger">{error.username}</p>
        </div>

        {/* Ô nhập email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            name="email"
            id="email"
            onChange={HandleChangeInput}
          />
          <p className="text-danger">{error.email}</p>
        </div>

        {/* Ô nhập password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            name="password"
            id="password"
            type="password"
            onChange={HandleChangeInput}
          />
          <p className="text-danger">{error.password}</p>
        </div>

        {/* Nút submit form */}
        <div className="form-group mt-3">
          <button className="btn btn-success" type="submit" disabled={!valid}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default DemoFormLogin;
