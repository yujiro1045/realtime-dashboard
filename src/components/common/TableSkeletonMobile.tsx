const TableSkeletonMobile = ({ rows = 5 }: { rows?: number }) => {
  return (
    <div className="animate-pulse md:hidden flex flex-col gap-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow border border-gray-200 space-y-2"
        >
          <div className="h-4 bg-gray-300 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-1/4" />
          <div className="h-4 bg-gray-300 rounded w-1/3" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default TableSkeletonMobile;
