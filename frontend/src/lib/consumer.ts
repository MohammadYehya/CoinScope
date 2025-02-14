import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "nextjs-app",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "nextjs-group" });

export const startConsumer = async (topic: string | RegExp, callback: (arg0: string | undefined) => void) => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      callback(message.value?.toString());
    },
  });
};
