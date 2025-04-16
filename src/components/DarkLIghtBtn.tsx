"use client";
import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

export default function DarkLightBtn() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function handleThemeChange() {
    if (theme === "light") {
      document.body.classList.add("dark");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      setTheme("light");
    }
  }

  return (
    <button
      onClick={handleThemeChange}
      className="flex items-center gap-2 dark:text-white"
    >
      <p className="uppercase">{theme}</p>
      {theme === "light" ? (
        <LuMoonStar className="text-2xl" />
      ) : (
        <IoSunnyOutline className="text-2xl" />
      )}
    </button>
  );
}
