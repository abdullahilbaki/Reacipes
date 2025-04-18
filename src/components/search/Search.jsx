import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  const [searchStr, setSearchStr] = useState("");
  const inputRef = useRef(null);

  const handleSearchOnChange = (e) => {
    setSearchStr(e.target.value);
  };
  const handleFocus = () => {
    window.location.hash = "#recipes";
    inputRef.current?.focus();
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === "Escape") {
        setSearchStr("");
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <label className="input w-auto" htmlFor="recipe-search">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        id="recipe-search"
        ref={inputRef}
        type="text"
        className="grow"
        value={searchStr}
        onChange={handleSearchOnChange}
        onFocus={handleFocus}
        placeholder="Search for a recipe"
      />
      <kbd className="kbd kbd-sm">⌘</kbd>
      <kbd className="kbd kbd-sm">K</kbd>
    </label>
  );
};

export default Search;
