'use client'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io((process.env.STREAMPATH || "localhost")+":4000");

export default function CoinTracker() {
    const [text, setText] = useState("")
    const [selectedCoin, setSelectedCoin] = useState("");
    const [transactions, setTransactions] = useState<{s:string; c:string}>();

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
        <div>
            <h1>Live Crypto Tracker</h1>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={() => {setSelectedCoin(text)}}>Send Message</button>
            </div>

            <h2>Transactions</h2>
            <div>
                {transactions ? `${transactions?.s} : ${transactions?.c}` : ''}
            </div>
        </div>
    );
}
