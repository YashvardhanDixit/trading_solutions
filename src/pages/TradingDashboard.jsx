import React from "react";
import Header from "../components/Header";
import MarketSummary from "../components/MarketSummary";
import ChartSection from "../components/ChartSection";
import Watchlist from "../components/Watchlist";
import PortfolioSummary from "../components/PortfolioSummary";


const TradingDashboard = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow p-6 overflow-hidden flex">
        <div className="flex-grow mr-4">
          <MarketSummary />
           <PortfolioSummary />
          <ChartSection />
        </div>
        <Watchlist />
      </main>
    </div>
  );
};

export default TradingDashboard;
