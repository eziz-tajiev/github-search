"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

export default function DarkLightBtn() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  function toggleDark() {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="flex items-center gap-2">
      <p>{resolvedTheme === "light" ? "DARK" : "LIGHT"}</p>
      <button onClick={toggleDark} className="text-2xl">
        {resolvedTheme === "light" ? <LuMoonStar /> : <IoSunnyOutline />}
      </button>
    </div>
  );
}
