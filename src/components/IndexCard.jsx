import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const IndexCard = ({ index }) => {
  const handleClick = () => alert(`Details for ${index.name}`);

  const borderColor = index.color === "green" ? "border-green-400" : "border-red-400";
  const textColor = index.color === "green" ? "text-green-600" : "text-red-600";

  return (
    <div
      onClick={handleClick}
      className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer border-t-4 ${borderColor} transition-all duration-300`}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-xl">{index.flag}</span>
          <span className="font-semibold text-gray-800">{index.name}</span>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded ${
            index.color === "green"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {index.change > 0 ? "+" : ""}
          {index.change}%
        </span>
      </div>

      <div className="text-2xl font-bold mb-2 text-gray-900">
        {index.value.toLocaleString()}
      </div>

      <div className="h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={index.chartData.map((v, i) => ({ value: v, time: i }))}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={index.color === "green" ? "#16a34a" : "#dc2626"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`text-xs mt-2 ${textColor}`}>
        {index.change > 0 ? "▲ Gain" : "▼ Loss"}
      </div>
    </div>
  );
};

export default IndexCard;
