import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import Card from "./components/common/Card";
import { FaArrowUp, FaChartLine, FaGlobeAmericas } from "react-icons/fa";
import CryptoTable from "./components/dashboard/CryptoTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

        <div className="flex flex-col flex-1">
          <Header />

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
            <Card
              title="Total Volume"
              value="$2.4T"
              percentage="+12.5%"
              icon={<FaChartLine className="w-5 h-5" />}
              percentageColor="green"
            />
            <Card
              title="Active Markets"
              value="1,247"
              percentage="+3.2%"
              icon={<FaGlobeAmericas className="w-5 h-5" />}
              percentageColor="green"
            />
            <Card
              title="Top Gainers"
              value="87"
              percentage="-2.1%"
              icon={<FaArrowUp className="w-5 h-5 rotate-180 text-red-500" />}
              percentageColor="red"
            />
          </div>

          <main className="p-4">
            <CryptoTable />
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
