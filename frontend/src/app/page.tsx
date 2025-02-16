"use client";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io((process.env.STREAMPATH || "localhost") + ":4000");

export default function CoinTracker() {
  const [text, setText] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [transactions, setTransactions] = useState<{ s: string; c: string }>();
  const [test, setTest] = useState([]);

    async function getTradingPairs() {
      const res = await fetch("/api/getTradingPairs");
      const data = await res.json();
      setTest(data.data.symbols.map((item: { symbol: string }) => item.symbol));
    }

  useEffect(() => {});

  useEffect(() => {
    socket.emit("SelectCoin", selectedCoin);

    socket.on("transaction", (transaction) => {
      setTransactions(transaction);
    });

    return () => {
      socket.off("transaction");
    };
  }, [selectedCoin]);

  return (
    // <div className="p-96">
    //   <h1>Live Crypto Tracker</h1>
    //   <div>
    //     <input
    //       type="text"
    //       value={text}
    //       onChange={(e) => setText(e.target.value)}
    //     />
    //     <button
    //       onClick={() => {
    //         setTransactions(undefined);
    //         setSelectedCoin(text);
    //       }}
    //     >
    //       Send Message
    //     </button>
    //   </div>
    //   <button
    //     onClick={() => {
    //       getTradingPairs();
    //     }}
    //   >
    //     Test
    //   </button>
    //   {test.map((item) => (
    //     <div onClick={() => {setText(item); setTest([])}} key={item}>{item}</div>
    //   ))}

    //   <h2>Transactions</h2>
    //   <div>
    //     {transactions ? (
    //       `${transactions?.s} : ${transactions?.c}`
    //     ) : selectedCoin ? (
    //       <LoaderCircle className="flex justify-center animate-spin ease-linear" />
    //     ) : (
    //       ""
    //     )}
    //   </div>
    // </div>
    <div>
      
    </div>
  );
}
