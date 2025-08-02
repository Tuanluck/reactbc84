import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

const DemoFormik = () => {
  const frmRegister = useFormik({
    initialValues: {
      username: "",
      email: "",
      gender: "male",
      country: "australia",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required(`username cannot be blank!`),
      email: yup
        .string()
        .required(`email cannot be blank!`)
        .email("Email is invalid"),
      password: yup
        .string()
        .required(`password cannot be blank!`)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\s\S]{8,32}$/,
          `Password must be 8–32 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.`
        ),
    }),
    onSubmit: async (value) => {
      console.log(value); //value sau khi submit
    },
  });
  return (
    <form
      className="container mt-5 p-4 border rounded shadow"
      style={{ maxWidth: "400px" }}
      onSubmit={frmRegister.handleSubmit}
    >
      <h3 className="text-center mb-4">User Registration</h3>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          onChange={frmRegister.handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={frmRegister.handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              defaultChecked
              onChange={frmRegister.handleChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={frmRegister.handleChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          className="form-select"
          id="country"
          name="country"
          onChange={frmRegister.handleChange}
        >
          <option value="australia">Australia</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={frmRegister.handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={!frmRegister.isValid}
      >
        Register
      </button>
    </form>
  );
};

export default DemoFormik;
