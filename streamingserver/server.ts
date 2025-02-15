import { Server } from "socket.io";
import { Kafka } from "kafkajs";
import http from "http";

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

const kafka = new Kafka({
  clientId: "nextjs-app",
  brokers: [(process.env.KAFKAPATH || "localhost") + ":9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({groupId: "ReadCryptoData"})

const userCoins = new Map();

io.on("connection", (socket) => {
  socket.on(`SelectCoin`, (coin) => {
    userCoins.set(socket.id, coin)
  })

  socket.on("disconnect", () => {
    userCoins.delete(socket.id)
  })
})

const startProducer = async () => {
  await producer.connect();

  const binanceWs = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

  binanceWs.onmessage = async (event) => {
      const transactions = JSON.parse(event.data);
      for (const transaction of transactions) {
          await producer.send({
              topic: "CryptoData",
              messages: [{ value: JSON.stringify(transaction) }],
          });
      }
  };
};

const startConsumer = async () => {
  await consumer.connect()
  await consumer.subscribe({topic: "CryptoData", fromBeginning:true});

  await consumer.run({
    eachMessage: async ({message}) => {
      const transaction = JSON.parse(message.value?.toString() || "");
            const coin = transaction.s;

            io.sockets.sockets.forEach((socket) => {
                if (userCoins.get(socket.id)?.includes(coin)) {
                    socket.emit("transaction", transaction);
                }
            });
    }
  })
}

server.listen(4000, () => console.log("Server running on port 4000"));
startProducer();
startConsumer();