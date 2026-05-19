import { Link } from "react-router";
import { MapPin, Briefcase, Sparkles, MessageCircle } from "lucide-react";
import { CircularProgress } from "./CircularProgress";

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  profession: string;
  image: string;
  matchScore: number;
  whyMatch?: string;
}

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
      <Link to={`/profile/${match.id}`} className="block">
        <div className="relative">
          <img
            src={match.image}
            alt={match.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4">
            <CircularProgress value={match.matchScore} size={64} strokeWidth={4} />
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold mb-1">
            {match.name}, {match.age}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{match.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">{match.profession}</span>
            </div>
          </div>

          {match.whyMatch && (
            <div className="p-3 bg-purple-50 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{match.whyMatch}</p>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
              View Profile
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
