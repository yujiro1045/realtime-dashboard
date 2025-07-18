const CardSkeleton = () => {
  return (
    <div className="animate-pulse bg-white p-4 rounded-lg shadow">
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
      <div className="h-6 w-2/3 bg-gray-300 rounded mb-2" />
      <div className="h-4 w-1/4 bg-gray-200 rounded" />
    </div>
  );
};

export default CardSkeleton;
