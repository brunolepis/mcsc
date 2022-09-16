import React from "react";
import { useSearchParams } from "react-router-dom";

function ServerType() {
  const [search, setSearch] = useSearchParams();

  const proceed = (serverType) => {
    search.set("question", "server_version");
    search.set("type", serverType);
    setSearch(search);
  };

  return (
    <div className="flex flex-col space-y-7 items-center text-center">
      <h1 className="text-offwhite text-xl px-2">
        What type of server do you want to install?
      </h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => {
            proceed("Paper");
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Paper
        </button>
        <button
          onClick={() => {
            proceed("Spigot");
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Spigot
        </button>
        <button
          onClick={() => {
            proceed("Vanilla");
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Vanilla
        </button>
      </div>
    </div>
  );
}

export default ServerType;
