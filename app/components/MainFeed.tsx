"use client";

import { TweetComposer } from "./TweetComposer";
import { TweetList } from "./TweetList";

export function MainFeed() {
  return (
    <div className="min-h-screen">
      {/* Header - No "Home" text, just tabs */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        {/* Tab Navigation */}
        <div className="flex">
          <button className="flex-1 py-4 text-center font-medium relative hover:bg-gray-900/50 transition-colors">
            <span className="text-white">For you</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full"></div>
          </button>
          <button className="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-900/50 transition-colors">
            Following
          </button>
          <button className="flex-1 py-4 text-center font-medium text-gray-500 hover:bg-gray-900/50 transition-colors">
            Sui community
          </button>
        </div>
      </div>

      {/* Tweet Composer */}
      <div className="border-b border-gray-800">
        <TweetComposer />
      </div>

      {/* Tweet Feed */}
      <TweetList />
    </div>
  );
}
