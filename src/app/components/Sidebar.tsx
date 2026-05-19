import { Link, useLocation } from "react-router";
import { Home, Compass, MessageCircle, BarChart3, User, Settings, Heart } from "lucide-react";

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/discover", icon: Compass, label: "Discover" },
    { path: "/messages", icon: MessageCircle, label: "Messages" },
    { path: "/insights", icon: BarChart3, label: "Insights" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">MatchAI</h1>
            <p className="text-sm text-gray-500">Find your perfect match</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Sarah Johnson</p>
            <p className="text-sm text-gray-500">View Profile</p>
          </div>
          <Settings className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </aside>
  );
}
