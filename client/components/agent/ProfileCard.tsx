"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Message {
  id: string;
  name: string;
  text: string;
  avatar: string;
}

export default function ProfileCard() {
  const messages: Message[] = [
    {
      id: "1",
      name: "Peter Johnson E.",
      text: "You: Sure, Let's proceed.",
      avatar: "https://github.com/shadcn.png",
    },
    {
      id: "2",
      name: "Peter Johnson E.",
      text: "You: Sure, Let's proceed.",
      avatar: "https://github.com/shadcn.png",
    },
  ];

  const level = 4;
  const rating = 7;

  return (
    <div className="hidden lg:flex lg:flex-col w-80 space-y-6 p-6 bg-white">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-40 w-40">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Profile"
            className="object-cover"
          />
          <AvatarFallback className="text-2xl bg-[#10B981] text-white">
            U
          </AvatarFallback>
        </Avatar>

        <Button
          variant="outline"
          className="w-full max-w-[200px] rounded-lg border-2 border-gray-300 text-black font-medium hover:bg-gray-50"
        >
          View Profile
        </Button>
      </div>

      {/* Level and Ratings Section */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-black">
            Level: <span className="ml-2">{level}</span>
          </p>

          <div className="space-y-2">
            <p className="text-lg font-semibold text-black">
              Ratings: <span className="ml-2">{rating}</span>
            </p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Messages Section */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-4 border-b-2 border-gray-200">
          <h3 className="text-lg font-semibold text-black">New Messages:</h3>
        </div>

        <div className="divide-y-2 divide-gray-200">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Avatar className="h-12 w-12 shrink-0">
                <AvatarImage
                  src={message.avatar}
                  alt={message.name}
                  className="object-cover"
                />
                <AvatarFallback className="bg-[#10B981] text-white">
                  {message.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-black truncate">
                  {message.name}
                </p>
                <p className="text-sm text-gray-500 truncate">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
