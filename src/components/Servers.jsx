import React, { useEffect, useState } from "react";
import { open } from "@tauri-apps/api/shell";
import { homeDir, join } from "@tauri-apps/api/path";

import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";
import { readDirectory, removeDirectory } from "../util/functions";
import Header from "./Header";

function Servers() {
  const [search, setSearch] = useSearchParams();
  const [servers, setServers] = useState([
    { type: "Paper", versions: [] },
    { type: "Spigot", versions: [] },
    { type: "Vanilla", versions: [] },
  ]);
  const [modal, setModal] = useState({
    show: false,
    version: null,
    type: null,
  });

  useEffect(() => {
    const func = async () => {
      const mainDir = await readDirectory("mcsc");
      mainDir.map(async (type) => {
        const versions = await readDirectory(`mcsc/${type}/`);
        setServers((curr) => curr.filter((x) => x.type !== type));
        return setServers((prev) => [
          ...prev,
          {
            type,
            versions,
          },
        ]);
      });
    };
    func();
  }, []);

  const serverDirectory = async () => {
    const userDir = await homeDir();
    return await open(await join(userDir, "mcsc", modal.type, modal.version));
  };

  return (
    <div className="relative w-full h-screen">
      <div
        className={`h-screen w-full absolute top-0 transition-all ease-out duration-300 justify-center items-center ${
          modal.show ? "flex" : "hidden"
        }`}
      >
        <div
          className="z-10 bg-black bg-opacity-30 h-full w-full absolute shadow-bg"
          onClick={() => setModal({ show: false, version: null, type: null })}
        ></div>
        <div className="z-20 bg-card w-4/5 h-fit rounded-lg relative">
          <button className="flex flex-col top-6 right-6 absolute active:scale-95">
            <XMarkIcon
              className="h-7 w-7 text-offwhite text-opacity-60 hover:text-opacity-100"
              onClick={() =>
                setModal({ show: false, version: null, type: null })
              }
            />
          </button>
          <div className="w-full h-full p-6">
            <h1 className="text-offwhite text-xl font-semibold mb-7">
              {modal.type} {modal.version}
            </h1>
            <div className="flex flex-col space-y-4 items-center">
              <button
                className="w-52 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
                onClick={() => serverDirectory()}
              >
                Server Directory
              </button>
              <button
                className="w-52 py-2 rounded-md bg-primary bg-opacity-20 hover:bg-opacity-100 active:scale-95 text-primary hover:text-secondary"
                onClick={async () => {
                  const dir = await join("mcsc", modal.type);
                  await removeDirectory(
                    dir,
                    await join(dir, modal.version)
                  ).then(() => window.location.reload());
                }}
              >
                Uninstall Server
              </button>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className="flex flex-col space-y-7 w-full justify-center items-center my-16">
        <div className="flex flex-col space-y-5 items-start">
          {servers
            .sort((a, b) => {
              return a.type.length - b.type.length;
            })
            .map((server, i) => {
              return (
                <div key={i} className="flex flex-col space-y-5 items-start">
                  <h1 className="text-offwhite text-xl px-2">{server.type}</h1>
                  <div className="flex flex-col space-y-4">
                    <div className="w-56 flex flex-col items-start space-y-4">
                      {server.versions.length !== 0 ? (
                        server.versions?.reverse()?.map((version, index) => {
                          return (
                            <div
                              key={index}
                              className="flex bg-gray bg-opacity-20 w-full px-6 py-2 rounded-lg justify-between"
                            >
                              <h1 className="text-offwhite">{version}</h1>
                              <button
                                onClick={() => {
                                  setModal({
                                    show: true,
                                    version,
                                    type: server.type,
                                  });
                                }}
                                className="active:scale-95"
                              >
                                <Cog6ToothIcon className="h-5 w-5 text-primary" />
                              </button>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-offwhite text-opacity-80 px-3">
                          No server installed
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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

export default Servers;
