import { create } from "zustand";
import type { Tweet } from "../types/tweet";

interface TweetStore {
  tweets: Tweet[];
  addTweet: (content: string) => void;
  toggleLike: (tweetId: string) => void;
  toggleRetweet: (tweetId: string) => void;
}

// Mock data with  content
const mockTweets: Tweet[] = [
  {
    id: "1",
    content:
      "🎉 Just deployed my first smart contract on Sui! The Move language is incredibly powerful for building secure DeFi applications. Check out our latest developments at DexiChain! #SuiNetwork #DeFi",
    user: {
      id: "1",
      name: "DexiChain",
      username: "dexichain",
      avatar: "/placeholder.svg?height=48&width=48",
      verified: true,
    },
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likes: 542,
    retweets: 212,
    replies: 88,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: "2",
    content:
      "📊 Latest Sui Network stats:\n• TPS: 120k+\n• Active validators: 100+\n• Total transactions: 1M+\n\nThe future of decentralized finance is here! 🚀 #SuiBlockchain #Crypto",
    user: {
      id: "2",
      name: "Sui Foundation",
      username: "SuiNetwork",
      avatar: "/placeholder.svg?height=48&width=48",
      verified: true,
    },
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    likes: 1256,
    retweets: 423,
    replies: 115,
    isLiked: true,
    isRetweeted: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "3",
    content:
      "🔥 New feature alert: DexiChain now supports cross-chain swaps with instant finality on Sui! Experience lightning-fast trades with minimal fees. Try it now at dexichain.io #DeFi #CrossChain",
    user: {
      id: "3",
      name: "DexiChain Dev",
      username: "dexichain_dev",
      avatar: "/placeholder.svg?height=48&width=48",
      verified: true,
    },
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    likes: 889,
    retweets: 334,
    replies: 127,
    isLiked: false,
    isRetweeted: true,
  },
  {
    id: "4",
    content:
      "💡 Move Tip: Use object-capabilities for better security in your Sui smart contracts. This prevents unauthorized access and ensures safe token transfers. #MoveLang #BlockchainDev",
    user: {
      id: "4",
      name: "Move Lang",
      username: "move_lang",
      avatar: "/placeholder.svg?height=48&width=48",
      verified: true,
    },
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    likes: 934,
    retweets: 267,
    replies: 89,
    isLiked: true,
    isRetweeted: false,
  },
  {
    id: "5",
    content:
      "🌟 Community Spotlight: Amazing to see the growth of DeFi projects on Sui! DexiChain leading the way with innovative cross-chain solutions. What's your favorite Sui DApp? #SuiEcosystem",
    user: {
      id: "5",
      name: "Sui Community",
      username: "SuiCommunity",
      avatar: "/placeholder.svg?height=48&width=48",
      verified: true,
    },
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    likes: 778,
    retweets: 215,
    replies: 132,
    isLiked: false,
    isRetweeted: false,
  },
];

export const useTweetStore = create<TweetStore>((set) => ({
  tweets: mockTweets,
  addTweet: (content: string) =>
    set((state) => ({
      tweets: [
        {
          id: Date.now().toString(),
          content,
          user: {
            id: "current-user",
            name: "John Doe",
            username: "johndoe",
            avatar: "/placeholder.svg?height=48&width=48",
            verified: false,
          },
          timestamp: new Date().toISOString(),
          likes: 0,
          retweets: 0,
          replies: 0,
          isLiked: false,
          isRetweeted: false,
        },
        ...state.tweets,
      ],
    })),
  toggleLike: (tweetId: string) =>
    set((state) => ({
      tweets: state.tweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1,
              isLiked: !tweet.isLiked,
            }
          : tweet
      ),
    })),
  toggleRetweet: (tweetId: string) =>
    set((state) => ({
      tweets: state.tweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              retweets: tweet.isRetweeted
                ? tweet.retweets - 1
                : tweet.retweets + 1,
              isRetweeted: !tweet.isRetweeted,
            }
          : tweet
      ),
    })),
}));
