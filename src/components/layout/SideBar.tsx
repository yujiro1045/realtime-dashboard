import { useEffect, useState } from "react";
import Select from "../common/Select";
import axios from "axios";
import type { ICrypto } from "../../interfaces/crypto.interface";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCurrencyType: string;
  onSelectCurrencyType: (type: string) => void;
}

const Sidebar = ({ isOpen, onClose, onSelectCurrencyType }: SidebarProps) => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await axios.get("https://api.coinlore.net/api/tickers/");
        const data: ICrypto[] = res.data.data;

        const uniqueTypes = Array.from(
          new Set(data.map((item) => item.symbol))
        );

        setTypes(uniqueTypes);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchTypes();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const currencyOptions = [
    { value: "all", label: "All Types" },
    ...types.map((type) => ({ value: type.toLowerCase(), label: type })),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectCurrencyType(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        fixed md:static inset-y-0 left-0 z-50
        w-64 md:w-48 bg-white border-r border-gray-100 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        h-screen overflow-y-auto
      `}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6 md:block">
            <h2 className="text-base font-semibold text-gray-900">Filters</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency Type
              </label>
              <Select options={currencyOptions} onChange={handleChange} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
