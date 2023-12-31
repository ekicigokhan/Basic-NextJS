"use client";
import React, { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeComp = () => {
  // Destructuring the useState hook correctly
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiLight
            onClick={() => {
              setTheme("light");
            }}
            cursor={"pointer"}
            size={25}
          />
        ) : (
          <CiDark
            onClick={() => {
              setTheme("dark");
            }}
            cursor={"pointer"}
            size={25}
          />
        ))}
    </div>
  );
};

export default ThemeComp;
