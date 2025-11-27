"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Paperclip, Send } from "lucide-react";
import * as React from "react";

export default function MessagesPage() {
  return (
    <div className="flex h-[calc(100vh-2rem)] w-full gap-6 p-6">
      {/* Sidebar */}
      <div className="w-1/3 min-w-[300px] flex flex-col gap-4">
        <h1 className="text-3xl font-normal text-foreground mb-4">Messages:</h1>
        
        <div className="flex flex-col gap-3">
          {/* Active User */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-transparent hover:bg-muted/80 transition-colors cursor-pointer">
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" alt="Peter Johnson E." />
              <AvatarFallback>PJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-base truncate">Peter Johnson E.</h3>
                <span className="text-xs text-muted-foreground">Sept 5</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">You: Sure, let's proceed.</p>
            </div>
          </div>

          {/* Other Users */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-transparent hover:bg-muted/50 transition-colors cursor-pointer">
              <Avatar className="h-12 w-12 border-2 border-background">
                <AvatarImage src="/placeholder-user.jpg" alt="Peter Johnson E." />
                <AvatarFallback>PJ</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-base truncate">Peter Johnson E.</h3>
                  <span className="text-xs text-muted-foreground">Sept 5</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">You: Sure, let's proceed.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col rounded-3xl overflow-hidden border shadow-sm">
        {/* Chat Header */}
        <div className="p-6 bg-muted/30 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" alt="Peter Johnson E." />
              <AvatarFallback>PJ</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-lg">Peter Johnson E.</h2>
              <p className="text-sm text-muted-foreground">Local Housing Agent - Akure</p>
            </div>
          </div>
          <span className="text-xs font-medium text-muted-foreground">Online now</span>
        </div>

        {/* Messages List */}
        <div className="flex-1 p-8 overflow-y-auto space-y-8">
          {/* Message 1 */}
          <div className="flex gap-4 max-w-[80%]">
            <Avatar className="h-10 w-10 mt-1">
              <AvatarImage src="/placeholder-user.jpg" alt="Peter" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">Peter</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Single rooms go for ₦180,000 per session, and yes — it covers water and light bills.
              </p>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex gap-4 max-w-[80%]">
            <Avatar className="h-10 w-10 mt-1">
              <AvatarImage src="/placeholder-user.jpg" alt="Peter" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">Peter</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Would you love to proceed?
              </p>
            </div>
          </div>

          {/* Message 3 (Me) */}
          <div className="flex gap-4 max-w-[80%]">
            <Avatar className="h-10 w-10 mt-1">
              <AvatarImage src="/placeholder-me.jpg" alt="Me" />
              <AvatarFallback>Me</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="font-semibold text-sm">Me</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sure, Let's proceed.
              </p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 pt-2">
          <div className="relative">
            <div className="bg-muted/30 rounded-2xl p-4 min-h-[80px] flex items-center border focus-within:ring-1 focus-within:ring-ring transition-all">
              <input 
                type="text" 
                className="w-full bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                placeholder="Type a message..."
                defaultValue="Can I check the place out on Friday morning?"
              />
            </div>
            <div className="flex items-center justify-end gap-4 mt-3 px-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
