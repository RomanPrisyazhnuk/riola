"use client";
import { Excursion } from "@/entities/excursion/excursion";
import type { FC } from "react";
import { useState } from "react";
import MainSearch from "./MainSearch";
import TransferSearch from "./TransferSearch";

interface SearchTabsProps {
  popularExcursions: Excursion[];
}

const SearchTabs: FC<SearchTabsProps> = () => {
  const [activeTab, setActiveTab] = useState("excursions");

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-t-md w-full sm:w-fit">
        <button
          onClick={() => setActiveTab("excursions")}
          className={`p-2 px-8 text-textColor w-1/2 sm:w-auto ${activeTab === "excursions" ? "rounded-t-md bg-white" : ""}`}
        >
          Экскурсии
        </button>
        <button
          onClick={() => setActiveTab("transfer")}
          className={`p-2 px-8 text-textColor w-1/2 sm:w-auto ${activeTab === "transfer" ? "rounded-t-md bg-white" : ""}`}
        >
          Трансфер
        </button>
      </div>
      <div className="max-w-7xl mx-auto p-4 shadow-lg bg-white w-full rounded-b-md sm:rounded-md sm:rounded-tl-none ">
        {/* Content */}
        {activeTab === "transfer" && <TransferSearch />}
        {activeTab === "excursions" && <MainSearch />}
      </div>
    </div>
  );
};
export default SearchTabs;
