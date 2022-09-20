import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function MainMenu() {
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (!search.get("window") || search.get("window") === "undefined") {
      search.set("window", "main_menu");
      return setSearch(search);
    } else return;
  });

  return (
    <div className="relative w-full h-screen">
      <Sidebar />
      <Header />
      <div className="flex flex-col space-y-4 w-full justify-center items-center pt-24">
        <button
          onClick={() => {
            search.set("window", "install");
            search.set("question", "server_type");
            setSearch(search);
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Install
        </button>
        <button
          onClick={() => {
            search.set("window", "servers");
            setSearch(search);
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Servers
        </button>
        <button
          onClick={() => {
            search.set("window", "settings");
            setSearch(search);
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
