"use client"

import { Tweet } from "./Tweet"
import { useTweetStore } from "../store/tweetStore"

export function TweetList() {
  const tweets = useTweetStore((state) => state.tweets)

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}
