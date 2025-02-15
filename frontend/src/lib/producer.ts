import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "nextjs-app",
  brokers: [(process.env.KAFKAPATH || "localhost")+":9092"], // Update this if using a cloud service
});

const producer = kafka.producer();

export const sendMessage = async (topic: string, message: string) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: message }],
  });
  await producer.disconnect();
};
