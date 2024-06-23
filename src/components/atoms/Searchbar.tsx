import React from "react";
import SearchIcon from "../../assets/svg/search.svg";

const SearchBar: React.FC = () => {
  return (
    <label className="flex items-center bg-indigo-dark bg-opacity-60 rounded-full hover:bg-opacity-20">
      <div className="w-6 ml-4">
        <img src={SearchIcon}></img>
      </div>
      <input
        type="text"
        placeholder="Buscar"
        className="py-2 bg-transparent focus:outline-none"
      />
    </label>
  );
};

export default SearchBar;
