"use client";
import { useState } from "react";
import useDebounce from "../(hooks)/useDebounce";
import "../globals.css";

export default function SearchBar(props: { callback: any }) {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const debounceValue = useDebounce(searchQuery, 400);

  const handleSearchQueryChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    props.callback(debounceValue);
  };

  return (
    <>
      <div className="w-full flex gap-2">
        <input
          type="text"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Search for a city"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button
          type="button"
          onClick={handleClick}
          className="p-2 text-sm font-medium text-white bg-gray-50 rounded-lg border border-gray-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="#000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          {/* <span className="sr-only">Search</span> */}
        </button>
        {/* <button type="button" onClick={handleClick}></button> */}
      </div>
    </>
  );
}
