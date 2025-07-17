import type { ICrypto } from "../../interfaces/crypto.interface";

interface CryptoTableMobileProps {
  data: ICrypto[] | undefined;
}

const CryptoTableMobile = ({ data }: CryptoTableMobileProps) => {
  return (
    <div>
      {data?.map((crypto, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                {crypto.symbol[0]}
              </div>
              <div>
                <div className="font-medium text-gray-800">{crypto.name}</div>
                <div className="text-xs text-gray-500">{crypto.symbol}</div>
              </div>
            </div>
            <span
              className={`text-sm font-semibold ${
                crypto.percent_change_24h.includes("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {crypto.percent_change_24h}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            <div>
              <strong>Price:</strong> {crypto.price_usd}
            </div>
            <div>
              <strong>Volume:</strong> {crypto.volume24}
            </div>
            <div className="flex items-center gap-2">{crypto.symbol}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoTableMobile;
