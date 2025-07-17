import { useEffect } from "react";
import Button from "../common/Button";
import Select from "../common/Select";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const countryOptions = [
    { value: "all", label: "🌐 All Countries" },
    { value: "us", label: "🇺🇸 US" },
    { value: "uk", label: "🇬🇧 UK" },
    { value: "ca", label: "🇨🇦 CA" },
  ];

  const currencyOptions = [
    { value: "all", label: "All Types" },
    { value: "btc", label: "BTC" },
    { value: "eth", label: "ETH" },
    { value: "usdt", label: "USDT" },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

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
            <Button variant="ghost" onClick={onClose} className="p-2 md:hidden">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <Select options={countryOptions} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency Type
              </label>
              <Select options={currencyOptions} />
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <Button className="w-full">Clear Filters</Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
