import CardSkeleton from "./CardSkeleton";

interface CardProps {
  title: string;
  value: string;
  percentage: string;
  icon?: React.ReactNode;
  percentageColor?: "green" | "red" | "gray";
  isLoading?: boolean;
}

const Card = ({
  title,
  value,
  percentage,
  icon,
  percentageColor = "gray",
  isLoading = false,
}: CardProps) => {
  const colorMap = {
    green: "text-green-500",
    red: "text-red-500",
    gray: "text-gray-500",
  };
  if (isLoading) return <CardSkeleton />;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow transition-shadow">
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className={`text-sm mt-1 ${colorMap[percentageColor]}`}>
          {percentage}
        </div>
      </div>
      {icon && <div className="text-gray-400">{icon}</div>}
    </div>
  );
};

export default Card;
