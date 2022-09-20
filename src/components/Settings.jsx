import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import Header from "./Header";

function Settings() {
  const [search, setSearch] = useSearchParams();

  const [startup, setStartup] = useState(localStorage.getItem("startup"));

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="flex flex-col space-y-7 w-full justify-center items-center my-16">
        <div className="flex flex-col space-y-5 items-start">
          <input
            placeholder={`java -Xmx%MAX%M -Xms%MIN%M -jar %VERSION%.jar nogui`}
            value={startup}
            onChange={(e) => {
              setStartup(e.target.value);
              localStorage.setItem("startup", startup);
            }}
            type="text"
            min={1}
            className="w-56 p-2 rounded-md bg-secondary text-offwhite border-2 border-primary border-opacity-40"
          />
        </div>
        <span className="w-3/5 h-px bg-offwhite bg-opacity-20"></span>
        <button
          onClick={() => {
            search.set("window", "main_menu");
            return setSearch(search);
          }}
          className="w-56 py-2 rounded-md bg-none border-2 border-primary border-opacity-40 hover:bg-primary active:scale-95 text-primary hover:text-secondary"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Settings;
