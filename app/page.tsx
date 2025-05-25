import { Sidebar } from "./components/Sidebar";
import { MainFeed } from "./components/MainFeed";
import { RightSidebar } from "./components/RightSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto flex">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-60 xl:w-72">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 border-x border-gray-800">
          <MainFeed />
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-80 xl:w-96">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
