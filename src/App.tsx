import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import Card from "./components/common/Card";
import { FaArrowUp, FaChartLine, FaGlobeAmericas } from "react-icons/fa";
import CryptoTable from "./components/dashboard/CryptoTable";
import { useCryptoStats } from "./hooks/useCryptoStats";
import { useCurrencyFilter } from "./hooks/useCurrencyFilter";
import CardSkeleton from "./components/common/CardSkeleton";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCurrencyType, setSelectedCurrencyType] = useState("all");

  const { data, isLoading, error } = useCryptoStats();

  const filteredCryptos = useCurrencyFilter(
    data?.data || [],
    selectedCurrencyType
  );

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        selectedCurrencyType={selectedCurrencyType}
        onSelectCurrencyType={setSelectedCurrencyType}
      />

      <div className="flex flex-col flex-1">
        <Header onSearch={setSearch} />

        <div className="p-4 md:hidden">
          <button
            onClick={handleOpenSidebar}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Filtros
          </button>
        </div>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : error || !data ? (
            <p>Error al cargar datos</p>
          ) : (
            <>
              <Card
                title="Total Volume"
                value={`$${(+data.data[0].volume24 / 1e9).toFixed(2)}B`}
                percentage={`${data.data[0].percent_change_24h}%`}
                icon={<FaChartLine className="w-5 h-5" />}
                percentageColor={
                  +data.data[0].percent_change_24h >= 0 ? "green" : "red"
                }
              />
              <Card
                title="Active Markets"
                value={data.info.coins_num.toString()}
                percentage="+0%"
                icon={<FaGlobeAmericas className="w-5 h-5" />}
                percentageColor="green"
              />
              <Card
                title="Top Gainers"
                value={data.data[1].name}
                percentage={`${data.data[1].percent_change_24h}%`}
                icon={<FaArrowUp className="w-5 h-5 rotate-180 text-red-500" />}
                percentageColor={
                  +data.data[1].percent_change_24h >= 0 ? "green" : "red"
                }
              />
            </>
          )}
        </div>

        <main className="p-4">
          <CryptoTable search={search} data={filteredCryptos} />
        </main>
      </div>
    </div>
  );
}

export default App;
