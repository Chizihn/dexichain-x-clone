export interface User {
  id: string
  name: string
  username: string
  avatar: string
  verified: boolean
}

export interface Tweet {
  id: string
  content: string
  user: User
  timestamp: string
  likes: number
  retweets: number
  replies: number
  isLiked: boolean
  isRetweeted: boolean
  image?: string
}
