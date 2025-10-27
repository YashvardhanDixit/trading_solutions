import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const WatchlistItem = ({ item }) => {
  const handleBuy = (e) => {
    e.stopPropagation();
    alert(`Buying ${item.symbol} at ₹${item.price}`);
  };
  const handleSell = (e) => {
    e.stopPropagation();
    alert(`Selling ${item.symbol} at ₹${item.price}`);
  };

  return (
    <li className="flex flex-col p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-200">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-medium text-gray-900">{item.symbol}</span>
          <span className="block text-sm text-gray-500">
            {item.price.toLocaleString()}
          </span>
        </div>

        <div
          className={`flex items-center ${
            item.color === "green" ? "text-green-600" : "text-red-600"
          }`}
        >
          {item.color === "green" ? (
            <TrendingUp size={16} className="mr-1" />
          ) : (
            <TrendingDown size={16} className="mr-1" />
          )}
          <span>
            {item.change > 0 ? "+" : ""}
            {item.change}%
          </span>
        </div>
      </div>

      <div className="mt-2 flex space-x-2">
        <button
          onClick={handleBuy}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded"
        >
          Buy
        </button>
        <button
          onClick={handleSell}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-1 rounded"
        >
          Sell
        </button>
      </div>
    </li>
  );
};

export default WatchlistItem;
