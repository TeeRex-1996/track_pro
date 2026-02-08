import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:3000/users";
const Register = () => {
  const navigate = useNavigate();
  const schema = Yup.object({
    fullname: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Email should be in correct format")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Pasword should match")
      .required("Please confirm password"),
    role: Yup.string().required("Role is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone Number is Required"),
  });

  const handlSubmit = async (values, { resetForm }) => {
    try {
      const { confirm_password, ...userData } = values;
      //NOTE: Using GET request here because JSON Server treats POST on /users as a create operation (adds new data to db.json).
      const existingResponse = await api.get(`${url}?email=${userData.email}`);
      if (existingResponse.data.length > 0) {
        Swal.fire({
          title: "Error!",
          text: "User Already Exists!",
          icon: "error",
        });
        return;
      }
      const response = await api.post(url, userData);
      if (response.data) {
        Swal.fire({
          title: "Registered!",
          text: "User Registerd Successfully!",
          icon: "success",
        });
        resetForm();
        navigate("/login");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong!",
          icon: "error",
        });
      }
    } catch (e) {
      Swal.fire({
        title: "Error!",
        text: "Server Error!",
        icon: "error",
      });
    }
  };
  return (
    <React.Fragment>
      <div className="mb-4 min-h-screen flex justify-center bg-gray-100">
        <div className="w-full max-w-md mt-6">
          <h2 className="text-2xl font-bold text-center mb-4">Register Page</h2>
          <Formik
            validationSchema={schema}
            initialValues={{
              fullname: "",
              email: "",
              password: "",
              confirm_password: "",
              role: "",
              phone: "",
            }}
            onSubmit={handlSubmit}
          >
            <Form className="max-w-md mx-auto p-6 border rounded-lg shadow">
              <div>
                <label htmlFor="fullname" className="block mb-1 font-medium">
                  Name :
                </label>
                <Field
                  type="text"
                  name="fullname"
                  className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
                ></Field>
                <ErrorMessage
                  className="text-red-700 error"
                  component="div"
                  name="fullname"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email :
                </label>
                <Field
                  type="text"
                  name="email"
                  className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
                ></Field>
                <ErrorMessage
                  className="text-red-700 error"
                  component="div"
                  name="email"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password :
                </label>
                <Field
                  type="password"
                  name="password"
                  className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
                ></Field>
                <ErrorMessage
                  className="text-red-700 text-sm mt-1 error"
                  component="div"
                  name="password"
                ></ErrorMessage>
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block mb-1 font-medium"
                >
                  Confirm Password :
                </label>
                <Field
                  type="password"
                  name="confirm_password"
                  className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
                ></Field>
                <ErrorMessage
                  className="text-red-700 text-sm mt-1 error"
                  component="div"
                  name="confirm_password"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="role" className="block mb-1 font-medium">
                  Role :
                </label>
                <Field
                  as="select"
                  name="role"
                  className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
                >
                  <option value="">Select Role</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                </Field>
                <ErrorMessage
                  className="text-red-700 text-sm mt-1 error"
                  component="div"
                  name="role"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Phone :
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="border p-2 w-full focus:ring-2 focus:bg-blue-100 rounded"
                ></Field>
                <ErrorMessage
                  className="text-red-700 text-sm mt-1 error"
                  component="div"
                  name="phone"
                ></ErrorMessage>
              </div>
              <button
                className="text-blue-700 rounded border border-black-400 px-1 py-2 mt-3"
                type="submit"
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Register;
