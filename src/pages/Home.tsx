import React, { useEffect, useState } from "react";
import { api } from "../components/services/api";
import Tiles from "../components/Tiles";
import { AUTH_KEYS } from "../types/constants";
interface Tile {
  id: string;
  title: string;
  desc: string;
  img: string;
  link:string;
  roles: string[];
}

const Home:React.FC = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const token = JSON.parse(localStorage.getItem(AUTH_KEYS.USER)  || "");
  useEffect(() => {
    api.get<Tile[]>(`/tiles`).then((res) => setTiles(res.data));
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
          <img src="./corp.png" alt="corp" className="w-auto h-72 ml-20"></img>
        </div>
      </div>
      <div className="border border-gray-100"></div>
      <Tiles tileData={tiles}></Tiles>
    </React.Fragment>
  );
};

export default Home;
