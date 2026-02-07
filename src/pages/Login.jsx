import * as Yup from "yup";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { api } from "../components/services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const schema = Yup.object({
    email: Yup.string()
      .email("Email Should be in correct format")
      .required("Email is Required"),
    password: Yup.string().required("Password is required"),
  });
  const login = async (values, { resetForm }) => {
    try {
      const response = await api.get(
        `/users?email=${values.email}&password=${values.password}`,
      );
      if (response.data.length > 0) {
        const user = response.data[0];
        const token = btoa(
          JSON.stringify({
            id: user.id,
            email: user.email,
            role: user.role,
          }),
        );
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
        resetForm();
        Swal.fire({
          title: "Logged In!",
          text: `User Logged In Successfully! ${response.data[0].fullname}`,
          icon: "success",
        });
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
    <div className="mb-4 min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-md mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login Page</h2>
        <Formik
          schema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={login}
        >
          <Form className="max-w-md mx-auto p-6 border rounded-lg shadow">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email:
              </label>
              <Field
                name="email"
                className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
              ></Field>
              <ErrorMessage
                className="bg-red-300"
                component="div"
                name="email"
              ></ErrorMessage>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password:
              </label>
              <Field
                name="password"
                type="password"
                className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition rounded"
              ></Field>
              <ErrorMessage
                className="bg-red-300"
                component="div"
                name="password"
              ></ErrorMessage>
            </div>
            <button
              className="bg-blue-400 rounded border border-black-400 px-2 py-2 mt-3"
              type="submit"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
