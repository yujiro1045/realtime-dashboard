"use client";

import Button from "../common/Button";
import Input from "../common/Input";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" className="p-2 md:hidden">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>

          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              CryptoMonitor
            </h1>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Live</span>
            <span>•</span>
            <span className="hidden md:inline">Updated 1 min ago</span>
          </div>
        </div>

        <div className="flex items-center">
          <Input
            placeholder="Search..."
            className="w-32 sm:w-48 md:w-64 text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
