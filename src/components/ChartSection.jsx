import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Cell,
} from "recharts";

const lineData = [
  { time: "19:00", value: 5458 },
  { time: "20:00", value: 5462 },
  { time: "21:00", value: 5470 },
  { time: "22:00", value: 5460 },
  { time: "23:00", value: 5468 },
];

const candleData = [
  { time: "19:00", open: 5450, close: 5460, high: 5465, low: 5445 },
  { time: "20:00", open: 5460, close: 5465, high: 5470, low: 5455 },
  { time: "21:00", open: 5465, close: 5475, high: 5480, low: 5460 },
  { time: "22:00", open: 5475, close: 5465, high: 5480, low: 5460 },
  { time: "23:00", open: 5465, close: 5468, high: 5472, low: 5460 },
];

const ChartSection = () => {
  const [chartType, setChartType] = useState("line");

  const handleChartClick = () => alert(`${chartType} chart clicked!`);
  const toggleChart = () => setChartType(chartType === "line" ? "candle" : "line");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-200">
      {/* Header with Toggle */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-700 font-semibold text-lg">Market Chart</h2>
        <button
          onClick={toggleChart}
          className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        >
          {chartType === "line" ? "Switch to Candle" : "Switch to Line"}
        </button>
      </div>

      {/* Chart Container */}
      <div
        onClick={handleChartClick}
        className="h-64 sm:h-96 cursor-pointer bg-gray-600 rounded-lg p-2"
      >
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart data={lineData}>
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis domain={["dataMin - 5", "dataMax + 5"]} stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", border: "none" }} />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
            </LineChart>
          ) : (
            <ComposedChart data={candleData}>
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis domain={["dataMin - 5", "dataMax + 5"]} stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", border: "none" }} />
              {/* Candle bars */}
              {candleData.map((d, i) => {
                const isBullish = d.close > d.open;
                return (
                  <React.Fragment key={i}>
                    {/* Wick */}
                    <Bar
                      dataKey="high"
                      fill="transparent"
                      isAnimationActive={false}
                      shape={({ x, y, width }) => {
                        const scale = (d.high - d.low) / 2;
                        return (
                          <line
                            x1={x + width / 2}
                            y1={y + scale}
                            x2={x + width / 2}
                            y2={y - scale}
                            stroke={isBullish ? "#16A34A" : "#DC2626"}
                            strokeWidth="2"
                          />
                        );
                      }}
                    />
                    {/* Body */}
                    <Bar
                      dataKey="open"
                      fill={isBullish ? "#16A34A" : "#DC2626"}
                      shape={({ x, y, width, height }) => (
                        <rect
                          x={x + width / 4}
                          y={Math.min(y, y + height)}
                          width={width / 2}
                          height={Math.abs(y - (y + height))}
                          fill={isBullish ? "#16A34A" : "#DC2626"}
                          rx={2}
                        />
                      )}
                    />
                  </React.Fragment>
                );
              })}
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
