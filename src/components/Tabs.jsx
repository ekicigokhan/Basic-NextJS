"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? "underline text-amber-600 underline-offset-8"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
