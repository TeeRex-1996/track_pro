import React from "react";
import { NavLink } from "react-router-dom";

interface TileData {
  title: string;
  desc: string;
  img: string;
  link: string;
}
interface TilesProps {
  tileData: TileData[];
}
const Tiles : React.FC<TilesProps> = ({tileData}) => {
  return (
       <div className="flex gap-20">
        {
          tileData.map((item)=>(
        <div className="mb-5 mt-4 object-cover bg-white shadow-lg rounded-lg overflow-hidden w-auto h-60 hover:border border-gray-500">
          <NavLink to={item.link}>
            <img
              src={item.img}
              alt="add_emp"
              className="w-full h-40"
            ></img>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">
               {item.desc}
              </p>
            </div>
          </NavLink>
        </div>
          ))
        }
      </div>
  )
};

export default Tiles;
