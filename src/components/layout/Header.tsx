import { useState } from "react";
import Input from "../common/Input";

const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Real-time Crypto Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search..."
            className="w-32 sm:w-48 md:w-64 text-sm"
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
