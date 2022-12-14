import React from "react";
import { fetch } from "@tauri-apps/api/http";
import { ask, message } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api/tauri";
import { homeDir, join } from "@tauri-apps/api/path";
import { useSearchParams } from "react-router-dom";

import { eula, serverTypes } from "../../util/constants";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import {
  getHighestValue,
  createDirectory,
  pathExists,
} from "../../util/functions";

function ServerVersion() {
  const [search, setSearch] = useSearchParams();

  const download = async (version) => {
    let str = `Would you like to download and install ${version}?`;
    if (await pathExists(`mcsc/Paper/${version}/${version}.jar`))
      str = `${version}.jar is already installed. Would you like to install it again?`;

    await ask(str).then(async (yes) => {
      if (yes) {
        const type = serverTypes.find((x) => x.type === search.get("type"));

        if (search.get("type") === "Paper") {
          const response = await fetch(
            type.api.versions.replace(
              /VERSION/,
              version ? version : getHighestValue(type.versions)
            ),
            {
              method: "GET",
              timeout: 5,
            }
          );
          const build = getHighestValue(response.data.builds);

          const url = type.api.download
            .replaceAll(/VERSION/g, version)
            .replaceAll(/BUILD/g, build);

          const userDir = await homeDir();

          await ask(
            "Do you accept the EULA?\nhttps://www.minecraft.net/en-us/eula"
          ).then(async (accepted) => {
            if (!accepted) throw Error("EULA wasn't accepted.");
            else {
              if (!(await pathExists(`mcsc/Paper`))) {
                createDirectory(`mcsc/Paper/${version}`);
              }
              return await invoke("write_file", {
                filePath: await join(
                  userDir,
                  "mcsc",
                  "Paper",
                  version,
                  "eula.txt"
                ),
                fileContent: eula,
              });
            }
          });

          const fileName = `${version}.jar`;
          const filePath = await join(
            userDir,
            "mcsc",
            "Paper",
            version,
            fileName
          );

          return await invoke("download_file", { filePath, url }).then(
            async (msg) => {
              return await message(`${msg} ${fileName}.`);
            }
          );
        } else {
          const versionIndex = type.versions.findIndex((x) => x === version);

          const url = type.downloads[versionIndex];

          const userDir = await homeDir();

          await ask(
            "Do you accept the EULA?\nhttps://www.minecraft.net/en-us/eula"
          ).then(async (accepted) => {
            if (!accepted) throw Error("EULA wasn't accepted.");
            else {
              if (
                !(await pathExists(`mcsc/${search.get("type")}/${version}`))
              ) {
                createDirectory(`mcsc/${search.get("type")}/${version}`);
              }
              return await invoke("write_file", {
                filePath: await join(
                  userDir,
                  "mcsc",
                  search.get("type"),
                  version,
                  "eula.txt"
                ),
                fileContent: eula,
              });
            }
          });

          const fileName = `${version}.jar`;
          const filePath = await join(
            userDir,
            "mcsc",
            search.get("type"),
            version,
            fileName
          );

          return await invoke("download_file", { filePath, url }).then(
            async (msg) => {
              return await message(`${msg} ${fileName}.`);
            }
          );
        }
      } else {
        return console.error("Cancelled version selection.");
      }
    });
  };

  return (
    <div className="flex flex-col space-y-7 items-center text-center">
      <h1 className="text-offwhite text-xl px-2">
        What version do you want to play in?
      </h1>
      <div className="flex flex-col space-y-4">
        <div className="w-56 flex flex-col items-center space-y-4">
          {serverTypes
            .find((x) => x.type === search.get("type"))
            .versions.map((version, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-gray bg-opacity-20 w-full px-6 py-2 rounded-lg justify-between"
                >
                  <h1 className="text-offwhite">
                    {search.get("type")} {version}
                  </h1>
                  <button
                    onClick={async (e) => {
                      await download(version);
                      search.set("question", "server_player_limit");
                      search.set("version", version);
                      setSearch(search);
                      e.preventDefault();
                    }}
                    className="active:scale-95"
                  >
                    <ArrowDownTrayIcon className="h-5 w-5 text-primary" />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ServerVersion;
