import React, { useEffect, useState } from "react";
import { getVersion } from "@tauri-apps/api/app";

function Header() {
  const [version, setVersion] = useState("0.0.0");

  useEffect(() => {
    const func = async () => {
      const appVersion = await getVersion();
      return appVersion;
    };
    func().then((x) => setVersion(x));
  }, []);

  return (
    <div className="flex flex-col space-y-3 w-full justify-center items-center pt-8">
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="text-primary text-4xl font-semibold"
        title="Minecraft Server Creator"
      >
        MCSC
      </button>
      <h2 className="bg-gray px-2 py-0.5 rounded-full text-offwhite">
        v{version}
      </h2>
    </div>
  );
}

export default Header;
