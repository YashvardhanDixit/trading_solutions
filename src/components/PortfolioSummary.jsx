import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const PortfolioSummary = () => {
  const totalInvestment = 500000;
  const currentValue = 548200;
  const profitLoss = currentValue - totalInvestment;
  const profitPercent = ((profitLoss / totalInvestment) * 100).toFixed(2);

  const isProfit = profitLoss >= 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6 transition-all hover:shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Portfolio Summary</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Total Investment</p>
          <p className="text-xl font-semibold">₹{totalInvestment.toLocaleString()}</p>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Current Value</p>
          <p className="text-xl font-semibold">₹{currentValue.toLocaleString()}</p>
        </div>

        <div
          className={`p-3 rounded-lg flex flex-col items-start justify-center ${
            isProfit ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          <p className="text-sm">{isProfit ? "Overall Profit" : "Overall Loss"}</p>
          <div className="flex items-center space-x-2">
            {isProfit ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            <p className="text-xl font-bold">
              ₹{Math.abs(profitLoss).toLocaleString()} ({profitPercent}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
