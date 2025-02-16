"use client";
import { Card } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  //   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const socket = io((process.env.STREAMPATH || "localhost") + ":4000");

export default function Track() {
  const [text, setText] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [transactions, setTransactions] = useState<{ s: string; c: string }>();
  const [availableConversions, setAvailableConversions] = useState([]);

  async function getTradingPairs() {
    const res = await fetch("/api/getTradingPairs");
    const data = await res.json();
    setAvailableConversions(data.data);
  }

  //   useEffect(() => {});

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
    // <div className="bg-black text-white h-screen w-screen">
    //   <div className="">
    //     <h1>Live Crypto Tracker</h1>
    //     <div>
    //       <input
    //         type="text"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //       <button
    //         onClick={() => {
    //           setTransactions(undefined);
    //           setSelectedCoin(text);
    //         }}
    //       >
    //         Send Message
    //       </button>
    //     </div>
    //     <button
    //       onClick={() => {
    //         getTradingPairs();
    //       }}
    //     >
    //       Test
    //     </button>
    //     {test.map((item) => (
    //       <div
    //         onClick={() => {
    //           setText(item);
    //           setTest([]);
    //         }}
    //         key={item}
    //       >
    //         {item}
    //       </div>
    //     ))}

    //     <h2>Transactions</h2>
    //     <div>
    //       {transactions ? (
    //         `${transactions?.s} : ${transactions?.c}`
    //       ) : selectedCoin ? (
    //         <LoaderCircle className="flex justify-center animate-spin ease-linear" />
    //       ) : (
    //         ""
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-slate-900 text-white w-screen h-screen flex flex-col lg:flex-row">
      <div className="flex lg:flex-1 justify-center items-center flex-col">
        <div className="flex items-center h-fit p-2">
          <p className="font-black mr-2">Selected Conversion: </p>{" "}
          {text ? text : "None"}
        </div>
        <DropdownMenu onOpenChange={() => getTradingPairs()}>
          <DropdownMenuTrigger className="border flex h-fit p-2 rounded-full hover:bg-white hover:text-black hover:scale-125 transition-all duration-300">
            Select Conversion
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-900 text-white">
            <ScrollArea className="h-[200px]">
              {availableConversions.map((item) => (
                <DropdownMenuItem
                  onClick={() => {
                    setText(item);
                  }}
                  key={item}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          onClick={() => {
            setSelectedCoin(text);
          }}
          className="border flex h-fit p-2 rounded-full hover:bg-white hover:text-black hover:scale-125 transition-all duration-300 mt-2"
        >
          Start Stream
        </button>
      </div>
      <div className="flex flex-1">
        <Card className="w-full m-4 lg:m-20 bg-slate-900 border-slate-700 border-4 text-white p-4 flex flex-col items-center">
          <p className="text-4xl flex justify-center items-center">
            Streaming Conversion: {selectedCoin ? selectedCoin : "None"}
          </p>
          <div className="flex w-full h-full justify-center items-center">
            {transactions ? (
              <p className="text-2xl">
                {`${transactions?.s} : ${transactions?.c}`}
              </p>
            ) : selectedCoin ? (
              <LoaderCircle className="animate-spin ease-linear w-auto h-full" />
            ) : (
              ""
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
