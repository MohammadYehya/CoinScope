'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    await fetch("/api/Send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: "test-topic", message }),
    });
  };

  useEffect(() => {
    fetch("api/Consume")
  }, [])

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
