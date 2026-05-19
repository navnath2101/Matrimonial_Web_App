import { Link } from "react-router";
import { Heart, MessageCircle, Eye, Sparkles, ArrowRight } from "lucide-react";
import { MatchCard } from "./MatchCard";
import { CircularProgress } from "./CircularProgress";

export function Dashboard() {
  const topMatches = [
    {
      id: "1",
      name: "Emma Williams",
      age: 28,
      location: "New York, NY",
      profession: "Product Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      matchScore: 94,
      compatibility: {
        values: 96,
        lifestyle: 92,
        interests: 94,
      },
      whyMatch: "Shared passion for travel, similar career ambitions, and compatible life goals",
    },
    {
      id: "2",
      name: "Olivia Martinez",
      age: 27,
      location: "San Francisco, CA",
      profession: "Software Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      matchScore: 89,
      compatibility: {
        values: 90,
        lifestyle: 88,
        interests: 89,
      },
      whyMatch: "Strong intellectual connection, shared love for technology and innovation",
    },
    {
      id: "3",
      name: "Sophia Chen",
      age: 29,
      location: "Seattle, WA",
      profession: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      matchScore: 87,
      compatibility: {
        values: 85,
        lifestyle: 88,
        interests: 88,
      },
      whyMatch: "Complementary personalities, aligned family values, and mutual hobbies",
    },
  ];

  const stats = [
    { label: "Profile Views", value: "342", change: "+12%", icon: Eye },
    { label: "Matches", value: "28", change: "+4", icon: Heart },
    { label: "Messages", value: "156", change: "+23", icon: MessageCircle },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Welcome back, Sarah!</h1>
        <p className="text-gray-600">Here's what's happening with your matches today</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-3xl font-semibold mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">AI Match Ready!</h2>
              <p className="text-purple-100">
                We've found 3 exceptional matches based on your preferences
              </p>
            </div>
          </div>
          <Link
            to="/discover"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2"
          >
            View Matches
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Top Matches For You</h2>
          <p className="text-gray-600">Powered by AI compatibility analysis</p>
        </div>
        <Link
          to="/discover"
          className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
        >
          See All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {topMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Your Match Analytics</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <CircularProgress value={94} size={120} strokeWidth={8} />
            <p className="mt-3 font-medium">Average Match Score</p>
            <p className="text-sm text-gray-500">Across all matches</p>
          </div>
          <div className="text-center">
            <CircularProgress value={78} size={120} strokeWidth={8} color="blue" />
            <p className="mt-3 font-medium">Profile Strength</p>
            <p className="text-sm text-gray-500">Completion & quality</p>
          </div>
          <div className="text-center">
            <CircularProgress value={85} size={120} strokeWidth={8} color="green" />
            <p className="mt-3 font-medium">Activity Score</p>
            <p className="text-sm text-gray-500">Engagement level</p>
          </div>
          <div className="text-center">
            <CircularProgress value={92} size={120} strokeWidth={8} color="orange" />
            <p className="mt-3 font-medium">Response Rate</p>
            <p className="text-sm text-gray-500">Message replies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
