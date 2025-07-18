const TableSkeleton = ({ rows = 10 }: { rows?: number }) => {
  return (
    <div className="animate-pulse hidden md:block overflow-x-auto">
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
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="border-b">
              <td className="px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div>
                  <div className="h-4 bg-gray-300 rounded w-24 mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-16" />
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-300 rounded w-16" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-300 rounded w-12" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-300 rounded w-20" />
              </td>
              <td className="px-4 py-3">
                <div className="h-4 bg-gray-300 rounded w-12" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
