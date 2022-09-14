import React from "react";
import { open } from "@tauri-apps/api/shell";
import { homeDir, join } from "@tauri-apps/api/path";

import { useSearchParams } from "react-router-dom";

function ServerSetupDone() {
  const [search, setSearch] = useSearchParams();

  const mcscLocation = async () => {
    const userDir = await homeDir();
    return await open(
      await join(userDir, "mcsc", search.get("type"), search.get("version"))
    );
  };

  return (
    <div className="flex flex-col space-y-7 items-center text-center">
      <h1 className="text-offwhite text-xl px-2">
        Your server has been set up.
      </h1>
      <p className="text-offwhite text-opacity-80 text-lg px-2">
        Double click{" "}
        <span className="text-primary text-opacity-80">start.bat</span> in your server directory to start
        your server.
      </p>
      <div className="flex flex-col space-y-4">
        <button
          onClick={async () => {
            await mcscLocation().then(() => {
              search.delete("question");
              search.delete("type");
              search.delete("version");
              search.delete("player_limit");
              search.delete("min_ram");
              search.delete("max_ram");
              search.set("window", "main_menu");
            });

            return setSearch(search);
          }}
          className="w-56 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
        >
          Return to Main Menu
        </button>
      </div>
    </div>
  );
}

export default ServerSetupDone;
