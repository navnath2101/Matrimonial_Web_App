import { useState } from "react";
import { SlidersHorizontal, X, Plus } from "lucide-react";
import { MatchCard } from "./MatchCard";

export function MatchDiscovery() {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);

  const allMatches = [
    {
      id: "1",
      name: "Emma Williams",
      age: 28,
      location: "New York, NY",
      profession: "Product Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      matchScore: 94,
      whyMatch: "Shared passion for travel, similar career ambitions",
    },
    {
      id: "2",
      name: "Olivia Martinez",
      age: 27,
      location: "San Francisco, CA",
      profession: "Software Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      matchScore: 89,
      whyMatch: "Strong intellectual connection, tech enthusiast",
    },
    {
      id: "3",
      name: "Sophia Chen",
      age: 29,
      location: "Seattle, WA",
      profession: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      matchScore: 87,
      whyMatch: "Complementary personalities, aligned values",
    },
    {
      id: "4",
      name: "Ava Johnson",
      age: 26,
      location: "Austin, TX",
      profession: "UX Researcher",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      matchScore: 85,
      whyMatch: "Creative mindset, loves outdoor activities",
    },
    {
      id: "5",
      name: "Isabella Garcia",
      age: 30,
      location: "Boston, MA",
      profession: "Data Scientist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      matchScore: 83,
      whyMatch: "Analytical thinking, shared book interests",
    },
    {
      id: "6",
      name: "Mia Anderson",
      age: 28,
      location: "Denver, CO",
      profession: "Content Strategist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      matchScore: 81,
      whyMatch: "Love for storytelling, adventure seeker",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Discover Matches</h1>
          <p className="text-gray-600">
            {allMatches.length} potential matches based on your preferences
          </p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex gap-6">
        {showFilters && (
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 border border-gray-100 sticky top-8">
              <h3 className="font-semibold mb-4">Filters</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Age Range</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                      defaultValue="25"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                      defaultValue="35"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Location</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                    <option>All Locations</option>
                    <option>New York, NY</option>
                    <option>San Francisco, CA</option>
                    <option>Seattle, WA</option>
                    <option>Austin, TX</option>
                    <option>Boston, MA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Education</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
                    <option>Any</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Match Score (Minimum)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="75"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3">Interests</label>
                  <div className="space-y-2">
                    {["Travel", "Technology", "Sports", "Arts", "Reading"].map((interest) => (
                      <label key={interest} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6">
            {allMatches.map((match) => (
              <div key={match.id} className="relative">
                <MatchCard match={match} />
                <button
                  onClick={() => {
                    if (selectedForComparison.includes(match.id)) {
                      setSelectedForComparison(selectedForComparison.filter(id => id !== match.id));
                    } else if (selectedForComparison.length < 3) {
                      setSelectedForComparison([...selectedForComparison, match.id]);
                    }
                  }}
                  className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    selectedForComparison.includes(match.id)
                      ? "bg-purple-600 text-white"
                      : "bg-white/90 text-gray-600 hover:bg-purple-100"
                  }`}
                >
                  {selectedForComparison.includes(match.id) ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedForComparison.length > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex items-center gap-4">
          <p className="font-medium">
            {selectedForComparison.length} selected for comparison
          </p>
          <button
            onClick={() => setSelectedForComparison([])}
            className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
            Compare Matches
          </button>
        </div>
      )}
    </div>
  );
}
