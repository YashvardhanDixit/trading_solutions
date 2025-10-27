import React from "react";
import IndexCard from "./IndexCard";

const indices = [
  { name: "S&P 500", value: 5464.61, change: -0.16, color: "red", flag: "🇺🇸", chartData: [5450, 5458, 5462, 5460, 5464, 5461] },
  { name: "Nasdaq 100", value: 19700.43, change: -0.26, color: "red", flag: "🇺🇸", chartData: [19720, 19710, 19730, 19705, 19700, 19695] },
  { name: "Dow 30", value: 39150.34, change: 0.04, color: "green", flag: "🇺🇸", chartData: [39100, 39120, 39150, 39160, 39140, 39150] },
  { name: "Nikkei 225", value: 38596.4, change: -0.09, color: "red", flag: "🇯🇵", chartData: [38600, 38580, 38570, 38590, 38610, 38596] },
];

const MarketSummary = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-600">Market Summary</h2>
        <button
          onClick={() => alert("Refreshing market data...")}
          className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors duration-200 border border-gray-300"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {indices.map((index) => (
          <IndexCard key={index.name} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MarketSummary;
