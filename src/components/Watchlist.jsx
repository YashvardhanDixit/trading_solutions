import React from "react";
import WatchlistItem from "./WatchlistItem";

const watchlistItems = [
  { symbol: "NIFTY", price: 23467, change: -0.53, color: "red" },
  { symbol: "BANKNIFTY", price: 51613.35, change: -0.27, color: "red" },
  { symbol: "SPX", price: 5464.61, change: -0.16, color: "red" },
  { symbol: "BTCUSD", price: 64444, change: 0.33, color: "green" },
  { symbol: "USDJPY", price: 159.76, change: 0.54, color: "green" },
];

const Watchlist = () => {
  return (
    <aside className="w-64 bg-white p-4 rounded-lg shadow-md border border-gray-200 overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">Watchlist</h3>
      <ul className="space-y-2">
        {watchlistItems.map((item) => (
          <WatchlistItem key={item.symbol} item={item} />
        ))}
      </ul>
    </aside>
  );
};

export default Watchlist;
