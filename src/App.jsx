import React, { useEffect } from "react";
import { createDirectory } from "./util/functions";
import { useSearchParams } from "react-router-dom";
import Install from "./components/Install";
import MainMenu from "./components/MainMenu";
import Servers from "./components/Servers";
import Settings from "./components/Settings";

function App() {
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("offline");
    });

    window.addEventListener("online", () => {
      console.log("online");
    });

    if (!search.get("window") || search.get("window") === "undefined") {
      search.set("window", "main_menu");
      return setSearch(search);
    } else return;
  });

  createDirectory("mcsc");

  switch (search.get("window")) {
    case "main_menu": {
      return <MainMenu />;
    }
    case "install": {
      return <Install />;
    }
    case "servers": {
      return <Servers />;
    }
    case "settings": {
      return <Settings />;
    }
    default: {
      return <MainMenu />;
    }
  }
}

export default App;
