import { open, message } from "@tauri-apps/api/dialog";
import {
  createDir,
  BaseDirectory,
  readDir,
  removeDir,
  exists,
} from "@tauri-apps/api/fs";

export const pathExists = async (path) => {
  return await exists(path, { dir: BaseDirectory.Home });
};

export const readDirectory = async (path) => {
  const entries = await readDir(path, {
    dir: BaseDirectory.Home,
    recursive: true,
  });
  const arr = [];
  for (const entry of entries) {
    arr.push(entry.name);
  }
  return arr;
};

export const createDirectory = async (path) => {
  return await createDir(path, {
    dir: BaseDirectory.Home,
    recursive: true,
  });
};

export const removeDirectory = async (parentPath, childPath) => {
  await removeDir(childPath, {
    dir: BaseDirectory.Home,
    recursive: true,
  });
  const parent = await readDirectory(parentPath);
  if (parent.length === 0)
    return await removeDir(parentPath, {
      dir: BaseDirectory.Home,
      recursive: true,
    });
  else return;
};

export const capitalize = (string) => {
  return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

export const getHighestValue = (array) => {
  return array.reduce((prev, current) => (prev.y > current.y ? prev : current));
};

export const getMcscLocation = async (setMcscLocation) => {
  await message("'/mcsc' will be added after your selected path.", {
    title: "mcsc",
    type: "info",
  });

  const selected = await open({
    directory: true,
    multiple: false,
  });

  if (selected) {
    const location = `${selected}${
      selected.endsWith("\\") ? "mcsc" : "\\mcsc"
    }`;

    localStorage.setItem("mcsc_location", location);
    if (setMcscLocation) setMcscLocation(location);

    await message(`Your mcsc directory has been set to ${location}`, {
      title: "mcsc",
      type: "info",
    });
  }
};
