import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/SideBar";
import Header from "./components/layout/Header";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <main className="flex-1 md:ml-64">
        <Header />

        <div className="p-4 md:hidden">
          <button
            onClick={handleOpenSidebar}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
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

        <div className="p-4">
          <h1 className="text-xl font-semibold">Dashboard principal</h1>
          <p>tabla</p>
          <p>gráficos</p>
        </div>
      </main>
    </div>
  );
}

export default App;
