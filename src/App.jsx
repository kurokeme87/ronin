import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Liquidity from "./Pages/Liquidity";
import Tokens from "./Pages/Tokens";
import Swap from "./Pages/Swap";
import Accounts from "./Pages/Accounts";
import Contracts from "./Pages/Contracts";
import Analytics from "./Pages/Analytics";
import Staking from "./Pages/Staking";
import Governance from "./Pages/Governance";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Bridge from "./Pages/Bridge";
import Modal from "./components/Modal";
function App() {
  return (
    <div className>
      <div className="flex  ">
        <Sidebar />
        <div className="h-full w-full  items-center justify-center flex flex-1 overflow-x-hidden overflow-y-scroll px-[16px] md:px-[54px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/verified-contracts" element={<Contracts />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/bridge" element={<Bridge />} />

            <Route path="/staking" element={<Staking />} />
            <Route path="/governance" element={<Governance />} />
          </Routes>
          {/* <Modal /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
