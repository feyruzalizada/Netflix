import { NextRequest } from "next/server";

export const runtime = "edge";

const users = ["Alex", "Maria", "Sam", "Priya", "Lior", "Chen", "Fatima", "Carlos", "Yuki", "Olga"];
const contents = ["Dark Matter", "Stranger Things", "Wednesday", "Squid Game", "The Crown", "Ozark", "Extraction 2", "Money Heist"];
const regions = ["us-east-1", "eu-west-1", "ap-northeast-1", "sa-east-1", "ap-southeast-2"];
const eventTypes = ["view", "like", "join", "quality"] as const;

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateEvent() {
  const type = randomFrom(eventTypes);
  return {
    type,
    user: randomFrom(users),
    content: randomFrom(contents),
    timestamp: new Date().toISOString(),
    region: randomFrom(regions),
    viewers: Math.floor(Math.random() * 50000) + 10000,
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") ?? "0", 10);

  let count = 0;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const send = () => {
        if (limit > 0 && count >= limit) {
          controller.enqueue(encoder.encode("event: done\ndata: {\"status\":\"complete\"}\n\n"));
          controller.close();
          return;
        }

        const event = generateEvent();
        const data = `event: stream\ndata: ${JSON.stringify(event)}\n\n`;
        controller.enqueue(encoder.encode(data));
        count++;

        const delay = 800 + Math.random() * 700;
        setTimeout(send, delay);
      };

      // Send initial connection event
      const init = `event: connected\ndata: ${JSON.stringify({ status: "connected", timestamp: new Date().toISOString() })}\n\n`;
      controller.enqueue(encoder.encode(init));

      setTimeout(send, 500);
    },
    cancel() {
      // stream cancelled by client disconnect
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-store",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
