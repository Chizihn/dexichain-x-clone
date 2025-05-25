"use client";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Users,
  Zap,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils"; // For conditional classes (optional but handy)

const navigationItems = [
  { icon: Home, label: "Home", href: "/", active: true, showDot: true },
  { icon: Search, label: "Explore", href: "/" },
  {
    icon: Bell,
    label: "Notifications",
    href: "/",
    notificationCount: 3, // Change this dynamically as needed
  },
  { icon: Mail, label: "Messages", href: "/" },
  { icon: Zap, label: "Grok", href: "/" },
  { icon: Bookmark, label: "Bookmarks", href: "/" },
  { icon: Users, label: "Communities", href: "/" },
  { icon: FileText, label: "Premium", href: "/" },
  { icon: User, label: "Profile", href: "/" },
  { icon: MoreHorizontal, label: "More", href: "/" },
];

export function Sidebar() {
  return (
    <div className="sticky top-0 h-screen p-4 flex flex-col bg-black text-white">
      {/* Logo */}
      <div className="mb-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-3xl">𝕏</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center space-x-4 p-2 rounded-full hover:bg-gray-900 transition-colors text-md",
                  item.active && "font-bold"
                )}
              >
                <div className="relative">
                  <item.icon className="w-6 h-6" />

                  {/* Blue dot for active */}
                  {item.showDot && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
                  )}

                  {/* Notification badge */}
                  {item.notificationCount && item.notificationCount > 0 && (
                    <span className="absolute -top-3 -right-2 bg-blue-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                      {item.notificationCount}
                    </span>
                  )}
                </div>

                <span className="text-lg hidden xl:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Post Button */}
        <div className="mt-6">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-full xl:w-full w-12 h-12 xl:h-auto"
          >
            <span className="hidden xl:block">Post</span>
            <span className="xl:hidden">+</span>
          </Button>
        </div>
      </nav>

      {/* User Profile */}
      <div className="mt-auto">
        <div className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer transition-colors">
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="hidden xl:block flex-1 min-w-0">
            <div className="font-bold truncate">John Doe</div>
            <div className="text-gray-500 truncate">@johndoe</div>
          </div>
          <MoreHorizontal className="w-5 h-5 hidden xl:block flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
