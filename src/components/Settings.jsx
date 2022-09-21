import React, { useEffect, useRef } from "react";

import { useSearchParams } from "react-router-dom";
import { starter } from "../util/constants";
import Header from "./Header";

function Settings() {
  const [search, setSearch] = useSearchParams();

  const startup = useRef();

  useEffect(() => {
    startup.current = localStorage.getItem("startup") || starter;
  });

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="flex flex-col space-y-7 w-full justify-center items-center my-16">
        <div className="flex flex-col space-y-5 items-start">
          <div className="flex flex-col items-start relative">
            <label
              htmlFor="startup"
              className="text-primary -top-3 left-1 px-1 absolute bg-secondary"
            >
              Startup Parameters
            </label>
            <textarea
              id="startup"
              placeholder={localStorage.getItem("startup") || starter}
              value={startup.current}
              onChange={(e) => {
                startup.current = e.target.value;
                if (
                  e.target.value.length === 0 &&
                  localStorage.getItem("startup")
                )
                  return localStorage.removeItem("startup");
                else localStorage.setItem("startup", startup.current);
                e.preventDefault();
              }}
              className="w-56 p-2 rounded-md bg-secondary text-offwhite border-2 border-primary border-opacity-40 min-h-[115.5px]"
            />
          </div>
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
