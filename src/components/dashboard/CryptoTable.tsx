import { useState } from "react";
import CryptoTableMobile from "./CryptoTableMobile";
import Pagination from "./Pagination";
import { useFilter } from "../../hooks/useFilter";
import type { ICrypto } from "../../interfaces/crypto.interface";
import TableSkeleton from "../common/TableSkeleton";
import TableSkeletonMobile from "../common/TableSkeletonMobile";

interface CryptoTableProps {
  search: string;
  data: ICrypto[];
}

const CryptoTable = ({ search, data }: CryptoTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = useFilter(data || [], search);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Cryptocurrency Data
      </h2>

      {data.length === 0 ? (
        <>
          <TableSkeleton />
          <TableSkeletonMobile />
        </>
      ) : (
        <>
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase">
                  <th className="px-4 py-2">Currency</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">5M Change</th>
                  <th className="px-4 py-2">Volume</th>
                  <th className="px-4 py-2">Symbol</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData?.map((crypto, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                        {crypto.symbol[0]}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {crypto.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {crypto.symbol}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold">
                      {crypto.price_usd}
                    </td>
                    <td
                      className={`px-4 py-3 font-medium ${
                        crypto.percent_change_24h.includes("-")
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {crypto.percent_change_24h}%
                    </td>
                    <td className="px-4 py-3">{crypto.volume24}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      {crypto.symbol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden flex flex-col gap-4">
            <CryptoTableMobile data={filteredData} />
          </div>
        </>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CryptoTable;
