"use client";
import Link from "next/link";

export default function CoinTracker() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-white bg-[url('/image.png')] bg-cover bg-black">
      <div>
        <h1 className="text-6xl lg:text-8xl font-black flex">CoinScope</h1>
        <p className="text-lg pl-6 lg:pl-10">Scope the gain, skip the pain!</p>
        <Link
          href={"/Track"}
          className="border rounded-full p-2 flex items-center justify-self-center mt-20 hover:bg-white hover:text-black transition-all duration-300 hover:scale-125"
        >
          Try it out
        </Link>
      </div>
    </div>
  );
}
