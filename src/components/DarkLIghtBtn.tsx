"use client";
import { cookieSet } from "@/utils/cookie";
import { Theme } from "@/utils/types";
import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

interface Props {
  currentTheme: Theme;
}

export default function DarkLightBtn({ currentTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  async function handleThemeChange() {
    if (theme === "light") {
      document.body.classList.add("dark");
      cookieSet("theme", "dark");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      cookieSet("theme", "light");
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
