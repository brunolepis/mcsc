import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { open } from "@tauri-apps/api/shell";
import { homeDir, join } from "@tauri-apps/api/path";

function Sidebar() {
  const [show, setShow] = useState(false);

  const mcscLocation = async () => {
    const userDir = await homeDir();
    return await open(await join(userDir, "mcsc"));
  };

  return (
    <>
      <button className="flex flex-col top-3 left-3 absolute active:scale-95">
        <Bars3Icon
          className="h-7 w-7 text-offwhite text-opacity-60 hover:text-opacity-100"
          onClick={() => setShow(true)}
        />
      </button>
      <div
        className={`h-screen w-full absolute top-0 left-0 flex transition-all ease-out duration-300 ${
          show ? "active" : "inactive"
        }`}
      >
        <div className="z-20 bg-card h-screen w-4/6 drop-shadow-xl drop-shadow-black">
          <div className="relative w-full h-full">
            <div className="w-full h-full py-12 space-y-4 flex flex-col items-start ml-7">
              <button
                className="text-offwhite text-opacity-80 hover:text-opacity-100 hover:underline text-xl"
                onClick={() => mcscLocation()}
              >
                Directory
              </button>
              <button
                className="text-offwhite text-opacity-80 hover:text-opacity-100 hover:underline text-xl"
                onClick={() => open("https://github.com/brunolepis/mcsc")}
                target="_blank"
              >
                GitHub
              </button>
              <button
                className="text-offwhite text-opacity-80 hover:cursor-not-allowed text-xl"
                title="Coming Soon"
                disabled
                /* onClick={() => mcscLocation()} */
              >
                Update
              </button>
            </div>
            <span className="absolute bottom-2 w-full text-center text-sm text-offwhite text-opacity-5 font-light">
              Made by{" "}
              <button className="hover:underline" onClick={() => open("https://brunolepis.xyz")}>
                Bruno Lepis
              </button>
            </span>
            <button className="flex flex-col top-3 right-3 absolute active:scale-95">
              <XMarkIcon
                className="h-7 w-7 text-offwhite text-opacity-60 hover:text-opacity-100"
                onClick={() => setShow(false)}
              />
            </button>
          </div>
        </div>
        <div
          className="z-10 absolute top-0 right-0 h-screen w-2/6"
          onClick={() => setShow(false)}
        ></div>
      </div>
    </>
  );
}

export default Sidebar;
