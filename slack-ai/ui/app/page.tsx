"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { ChatCard } from "@/components/chat";
import Link from "next/link";
import Image from "next/image";
import { SelectSlackChannel } from "@/components/slack-channel";

function generateSessionId() {
  return Date.now().toString();
}

export default function Page() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      // Generate a new session ID (you can use any method to generate an ID)
      const newSessionId = generateSessionId(); // Replace this with your own logic
      setSessionId(newSessionId);
    }
  }, [sessionId]);

  return (
    <div className="mt-20 flex justify-center items-stretch">
      <div className="max-w-screen-lg w-full bg-background">
        <div className="p-4 md:p-8 flex flex-col">
          <div className="space-y-4">
            <div className="flex items-center justify-left pl-0">
              {" "}
              <Image src="/slack.png" width={28} height={28} alt="Slack logo" />
              <h2 className="text-3xl font-semibold tracking-tight ml-2">
                Slack AI
              </h2>
            </div>
          </div>
          <h3 className="text-sm text-muted-foreground">
            Chat with your slack data. Code on{" "}
            <Link
              className="text-gray-900 underline underline-offset-2"
              href="https://github.com/embedchain/examples/slack-ai"
            >
              GitHub
            </Link>
            .
            <br />
            Built using{" "}
            <Link
              className="text-gray-900 underline underline-offset-2"
              href="https://github.com/embedchain/embedchain"
              target="_blank"
            >
              Embedchain
            </Link>{" "}
            ❤️
          </h3>
          <SelectSlackChannel />
          <Separator className="my-4" />
          <div className="flex-1 overflow-y-auto max-h-fit">
            {sessionId !== null && <ChatCard sessionId={sessionId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
