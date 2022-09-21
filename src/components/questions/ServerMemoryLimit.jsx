import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { homeDir, join } from "@tauri-apps/api/path";
import { type } from "@tauri-apps/api/os";

import { starter } from "../../util/constants";
import { useSearchParams } from "react-router-dom";

function ServerMemoryLimit() {
  const [search, setSearch] = useSearchParams();

  return (
    <div className="flex flex-col space-y-7 items-center text-center">
      <h1 className="text-offwhite text-xl px-2">
        What should be minimum and maximum ram?
        <br />
        <span className="text-offwhite text-opacity-80">(in Megabytes)</span>
      </h1>
      <div className="flex flex-col space-y-4">
        <input
          placeholder={`4000 Megabytes (default)`}
          value={search.get("min_ram") || 4000}
          onChange={(e) => {
            search.set("min_ram", e.target.value);
            setSearch(search);
          }}
          type="number"
          min={1000}
          className="w-56 p-2 rounded-md bg-secondary text-offwhite border-2 border-primary border-opacity-40"
        />
        <input
          placeholder={`4000 Megabytes (default)`}
          value={search.get("max_ram") || 4000}
          onChange={(e) => {
            search.set("max_ram", e.target.value);
            setSearch(search);
          }}
          type="number"
          min={1000}
          className="w-56 p-2 rounded-md bg-secondary text-offwhite border-2 border-primary border-opacity-40"
        />
        <button
          onClick={async (e) => {
            const userDir = await homeDir();
            const osType = await type();

            const write_file = async (start) => {
              await invoke("write_file", {
                filePath: await join(
                  userDir,
                  "mcsc",
                  search.get("type"),
                  search.get("version"),
                  start[0]
                ),
                fileContent: start[1]
                  .replace(/%MIN%/, search.get("min_ram") || 4000)
                  .replace(/%MAX%/, search.get("max_ram") || 4000)
                  .replace(/%VERSION%/, search.get("version")),
              });
            };

            const startup = localStorage.getItem("startup");

            const start = () => {
              if (startup) {
                return osType === "Windows_NT"
                  ? ["start.bat", startup]
                  : osType === "Linux"
                  ? ["start.sh", startup]
                  : osType === "Darwin"
                  ? ["start.command", startup]
                  : osType;
              } else {
                const substr = starter.substring(10, starter.length);
                return osType === "Windows_NT"
                  ? ["start.bat", starter]
                  : osType === "Linux"
                  ? ["start.sh", substr]
                  : osType === "Darwin"
                  ? ["start.command", substr]
                  : osType;
              }
            };

            await write_file(start());

            search.set("question", "server_setup_done");
            setSearch(search);
            e.preventDefault();
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ServerMemoryLimit;
