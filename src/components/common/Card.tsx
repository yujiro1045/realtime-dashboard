interface CardProps {
  title: string;
  value: string;
  subtext: string;
  icon?: React.ReactNode;
}

const Card = ({ title, value, subtext, icon }: CardProps) => {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-slate-800">{value}</h3>
      <p className="text-sm text-green-500">{subtext}</p>
    </div>
  );
};

export default Card;
