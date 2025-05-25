"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Smile, Calendar, MapPin } from "lucide-react";
import { useTweetStore } from "../store/tweetStore";

export function TweetComposer() {
  const [content, setContent] = useState("");
  const addTweet = useTweetStore((state) => state.addTweet);

  const handleSubmit = () => {
    if (content.trim()) {
      addTweet(content);
      setContent("");
    }
  };

  return (
    <div className="p-3 pt-4">
      <div className="flex gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <Textarea
            placeholder="What is happening?!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-transparent border-none text-xl placeholder-gray-600 resize-none focus:ring-0 focus:outline-none min-h-[80px] p-0"
            rows={3}
          />

          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2 text-[#1d9bf0]">
              <button className="p-2 hover:bg-[#1d9bf0]/10 rounded-full transition-colors">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#1d9bf0]/10 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#1d9bf0]/10 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#1d9bf0]/10 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="bg-[#1d9bf0] hover:bg-[#1a8cd8] disabled:opacity-50 text-white font-bold px-4 py-1.5 rounded-full text-sm"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
