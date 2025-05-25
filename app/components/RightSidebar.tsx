"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Verified, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

const trendingTopics = [
  {
    category: "Trending in Technology",
    topic: "#AI",
    posts: "1.2M posts",
  },
  {
    category: "Trending in Programming",
    topic: "NextJS",
    posts: "45K posts",
  },
  {
    category: "Trending",
    topic: "React",
    posts: "89K posts",
  },
  {
    category: "Technology · Trending",
    topic: "TypeScript",
    posts: "67K posts",
  },
  {
    category: "Trending in Web Development",
    topic: "Tailwind CSS",
    posts: "34K posts",
  },
];

const suggestedUsers = [
  {
    name: "Vercel",
    username: "vercel",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    description: "Develop. Preview. Ship.",
  },
  {
    name: "Next.js",
    username: "nextjs",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    description: "The React Framework",
  },
  {
    name: "React",
    username: "reactjs",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    description: "The library for web and native user interfaces",
  },
];

export function RightSidebar() {
  return (
    <div className="p-4 space-y-4">
      <div className="sticky top-2 z-20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <Input
            placeholder="Search"
            className="bg-gray-900 border-0 pl-12 py-4 rounded-full focus:bg-black focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Premium Subscription */}
      <div className="bg-gray-900/50 rounded-2xl p-4 border border-gray-800">
        <h2 className="text-xl font-bold mb-2">Subscribe to Premium</h2>
        <p className="text-sm text-gray-400 mb-4">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full">
          Subscribe
        </Button>
      </div>

      {/* What's happening */}
      <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800">
        <div className="p-4 pb-0">
          <h2 className="text-xl font-bold mb-3">What's happening</h2>
        </div>
        <div>
          {trendingTopics.map((trend, index) => (
            <div
              key={index}
              className="hover:bg-gray-800/50 p-4 cursor-pointer transition-colors group"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-gray-500 text-sm">{trend.category}</div>
                  <div className="font-bold text-lg">{trend.topic}</div>
                  <div className="text-gray-500 text-sm">{trend.posts}</div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-700 rounded-full transition-all">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 pt-0">
          <button className="text-blue-500 hover:underline text-sm">
            Show more
          </button>
        </div>
      </div>

      {/* Who to follow */}
      <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800">
        <div className="p-4 pb-0">
          <h2 className="text-xl font-bold mb-3">Who to follow</h2>
        </div>
        <div>
          {suggestedUsers.map((user, index) => (
            <div
              key={index}
              className="hover:bg-gray-800/50 p-4 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1 min-w-0">
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <span className="font-bold truncate">{user.name}</span>
                      {user.verified && (
                        <Verified className="w-4 h-4 text-blue-500 fill-current flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-gray-500 text-sm truncate">
                      @{user.username}
                    </div>
                    {user.description && (
                      <div className="text-sm text-gray-400 mt-1 line-clamp-2">
                        {user.description}
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-gray-200 font-bold px-4 py-1.5 rounded-full ml-3 flex-shrink-0"
                >
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 pt-0">
          <button className="text-blue-500 hover:underline text-sm">
            Show more
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-sm space-y-2 px-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
          <a href="#" className="hover:underline">
            Ads info
          </a>
          <a href="#" className="hover:underline">
            More
          </a>
        </div>
        <div>© 2024 X Corp.</div>
      </div>
    </div>
  );
}
