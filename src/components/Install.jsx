import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import ServerType from "./questions/ServerType";
import ServerVersion from "./questions/ServerVersion";
import ServerPlayerLimit from "./questions/ServerPlayerLimit";
import ServerMemoryLimit from "./questions/ServerMemoryLimit";
import ServerSetupDone from "./questions/ServerSetupDone";

function Install() {
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    search.set("question", search.get("question") || "server_type");
    return setSearch(search);
  }, [search, setSearch]);

  const questions = [
    {
      name: "server_type",
      component: ServerType,
    },
    {
      name: "server_version",
      component: ServerVersion,
    },
    {
      name: "server_player_limit",
      component: ServerPlayerLimit,
    },
    {
      name: "server_memory_limit",
      component: ServerMemoryLimit,
    },
    {
      name: "server_setup_done",
      component: ServerSetupDone,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-4 w-full justify-center items-center my-16">
        {questions.find((x) => x.name === search.get("question"))?.component()}
        <span className="w-3/5 h-px bg-offwhite bg-opacity-20"></span>
        <button
          onClick={() => {
            const index =
              questions.findIndex((x) => x.name === search.get("question")) - 1;
            if (index <= -1) {
              search.delete("question");
              search.delete("type");
              search.delete("version");
              search.delete("player_limit");
              search.delete("min_ram");
              search.delete("max_ram");
              search.set("window", "main_menu");
              return setSearch(search);
            } else {
              search.set("question", questions[index].name);
              return setSearch(search);
            }
          }}
          className="w-56 py-2 rounded-md bg-none border-2 border-primary border-opacity-40 hover:bg-primary active:scale-95 text-primary hover:text-secondary"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Install;
