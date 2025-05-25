"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react"
import { useTweetStore } from "../store/tweetStore"
import type { Tweet as TweetType } from "../types/tweet"

interface TweetProps {
  tweet: TweetType
}

export function Tweet({ tweet }: TweetProps) {
  const { toggleLike, toggleRetweet } = useTweetStore()
  const [isLiked, setIsLiked] = useState(tweet.isLiked)
  const [isRetweeted, setIsRetweeted] = useState(tweet.isRetweeted)

  const handleLike = () => {
    toggleLike(tweet.id)
    setIsLiked(!isLiked)
  }

  const handleRetweet = () => {
    toggleRetweet(tweet.id)
    setIsRetweeted(!isRetweeted)
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "now"
    if (diffInHours < 24) return `${diffInHours}h`
    return date.toLocaleDateString()
  }

  return (
    <article className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={tweet.user.avatar || "/placeholder.svg"} />
          <AvatarFallback>{tweet.user.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold hover:underline">{tweet.user.name}</h3>
            {tweet.user.verified && (
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            <span className="text-gray-500">@{tweet.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{formatTime(tweet.timestamp)}</span>
            <div className="ml-auto">
              <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-gray-800">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-white whitespace-pre-wrap">{tweet.content}</p>
            {tweet.image && (
              <div className="mt-3 rounded-2xl overflow-hidden border border-gray-700">
                <img
                  src={tweet.image || "/placeholder.svg"}
                  alt="Tweet image"
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4 max-w-md">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-500/10"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{tweet.replies}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleRetweet}
              className={`flex items-center space-x-2 hover:bg-green-500/10 ${
                isRetweeted ? "text-green-500" : "text-gray-500 hover:text-green-500"
              }`}
            >
              <Repeat2 className="w-5 h-5" />
              <span>{tweet.retweets}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-2 hover:bg-red-500/10 ${
                isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              <span>{tweet.likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-500/10"
            >
              <Share className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
