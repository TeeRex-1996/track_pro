import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../components/services/api";
const Home = () => {
  const [tiles, setTiles] = useState([]);
  const token = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    api.get(`/tiles`).then((res) => setTiles(res.data));
  }, []);
  return (
    <React.Fragment>
      <div className="p-4 flex  gap-4">
        <div className="p-5">
          <h1 className="text-4xl mt-20">
            Welcome to TrakPro {token.fullname}!
          </h1>
          <h1 className="text-2xl mt-2">
            Efficiently manage and track your employees.
          </h1>
        </div>
        <div className="p-8">
          <img src="./corp.png" alt="corp" className="w-auto h-70 ml-20"></img>
        </div>
      </div>
      <div className="border border-gray-100"></div>
      <div className="flex  gap-20">
        <div className="mb-5 mt-4 object-cover bg-white shadow-lg rounded-lg overflow-hidden w-auto h-60 hover:border border-gray-500">
          <NavLink to="#">
            <img
              src="./add_emp.png"
              alt="add_emp"
              className="w-full h-40"
            ></img>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Add Employees</h3>
              <p className="text-gray-600 mb-4">
                {" "}
                Add new employees to system easily
              </p>
            </div>
          </NavLink>
        </div>
        <div className="mb-5 mt-4 object-cover bg-white shadow-lg rounded-lg overflow-hidden w-auto h-60 hover:border border-gray-500">
          <NavLink to="#">
            <img src="./view.jpg" alt="view_emp" className="w-full h-40"></img>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">View Employees</h3>
              <p className="text-gray-600 mb-4">
                {" "}
                See list of employees with their details
              </p>
            </div>
          </NavLink>
        </div>
        <div className="mb-5 mt-4 object-cover bg-white shadow-lg rounded-lg overflow-hidden w-72 h-60 hover:border border-gray-500">
          <NavLink to="#">
            <img
              src="./manage_emp.jpg"
              alt="add_emp"
              className="w-full h-40"
            ></img>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Manage Employees</h3>
              <p className="text-gray-600">
                {" "}
                Edit or Remove employee information as needed
              </p>
            </div>
          </NavLink>
        </div>
        <div className="mb-5 mt-4 object-cover bg-white shadow-lg rounded-lg overflow-hidden w-72 h-60 hover:border border-gray-500">
          <NavLink to="#">
            <img
              src="./add_emp.png"
              alt="add_emp"
              className="w-full h-40"
            ></img>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Future functionality
              </h3>
              <p className="text-gray-600"> ...</p>
            </div>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
