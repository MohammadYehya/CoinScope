import { startConsumer } from "@/lib/consumer";

export async function GET() {
  startConsumer("test-topic", (message) => {
    console.log("Received message:", message);
  });
}
