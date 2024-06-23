// Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../atoms/Searchbar";

const Header: React.FC = () => {
  return (
<header className="bg-transparent shadow-2xl py-4">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-3xl mr-6">
            <Link to="/">Relatio</Link>
        </h1>
        <div className="flex items-center">
            <nav className="hidden md:flex items-center">
                <ul className="flex flex-grow justify-center">
                    <li className="mr-6">
                        <Link to="/" className="hover:text-gray-300">HOME</Link>
                    </li>
                    <li className="mr-6">
                        <Link to="/categories" className="hover:text-gray-300">CATEGORIES</Link>
                    </li>
                    <li>
                        <Link to="/features" className="hover:text-gray-300">FEATURES</Link>
                    </li>
                </ul>
            </nav>
        </div>
            <SearchBar/>
    </div>
</header>

  );
};

export default Header;
