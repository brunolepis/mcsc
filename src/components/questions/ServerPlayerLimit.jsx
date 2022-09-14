import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { homeDir, join } from "@tauri-apps/api/path";

import { serverProperties } from "../../util/constants";
import { useSearchParams } from "react-router-dom";

function ServerPlayerLimit() {
  const [search, setSearch] = useSearchParams();

  return (
    <div className="flex flex-col space-y-7 items-center text-center">
      <h1 className="text-offwhite text-xl px-2">
        What should be the player limit?
      </h1>
      <div className="flex flex-col space-y-4">
        <input
          placeholder={`20 (default)`}
          value={search.get("player_limit") || 20}
          onChange={(e) => {
            search.set("player_limit", e.target.value);
            setSearch(search);
          }}
          type="number"
          min={1}
          className="w-56 p-2 rounded-md bg-secondary text-offwhite border-2 border-primary border-opacity-40"
        />
        <button
          onClick={async (e) => {
            const userDir = await homeDir();

            await invoke("write_file", {
              filePath: await join(
                userDir,
                "mcsc",
                search.get("type"),
                search.get("version"),
                "server.properties"
              ),
              fileContent: serverProperties.replace(
                "max-players=20",
                `max-players=${search.get("player_limit") || 20}`
              ),
            });
            search.set("question", "server_memory_limit");
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

export default ServerPlayerLimit;
